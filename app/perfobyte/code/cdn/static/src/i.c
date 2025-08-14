

#include "env.h"

int main() {
    struct sockaddr_in addr;
    struct stat st;

    int
        sfd,
        fd,
        cfd,
        opt = 1
    ;
    sfd = http_init(PORT, &addr, &opt);
    char
        ct[32],
        path[FILE_PATH_SIZE],

        resp[RESPONSE_SIZE],
        b[REQUEST_SIZE],

        resp_404[] = "HTTP/1.1 404 Not Found\r\nContent-Length: 0\r\nConnection: close\r\n\r\n"
    ;
    uint
        path_i,
        path_l,

        slash,

        rl,
        rb,

        path_length
    ;
    socklen_t
        addrlen = sizeof(addr)
    ;

    path[0] = 'w';
    path[1] = '/';

    a: while (1) {
        if ((cfd = accept(sfd, (struct sockaddr *)&addr, &addrlen)) == -1) {
            printf("accept\n");
            continue;
        }
        
        read(cfd, b, REQUEST_SIZE);

        path_l = http_path((path_i = http_method(b)), b);

        memcpy((path + PATH_OFFSET), (b + path_i), (path_length = path_l - path_i));

        path[path_length+=PATH_OFFSET] = '\0';

        if ((fd = open(path, O_RDONLY)) < 0) {
            write(cfd, resp_404, SIZE_404);
        }
        else {
            fstat(fd, &st);

            slash = 0;
            rb = PATH_OFFSET;

            for (
                ;
                rb < path_length;
                rb++
            ) {
                if (path[rb] == '/') {
                    if (slash < 1) {
                        slash++;
                    }
                    else {break;}
                }
            }
            memcpy(ct, path + PATH_OFFSET, (path_length = (rb - PATH_OFFSET)));
            ct[path_length] = '\0';

            printf("%s\n", ct);

            rl = snprintf(
                resp,
                RESPONSE_SIZE,
                (
                    "HTTP/1.1 200 OK\r\n"
                    "Content-Length: %d\r\n"
                    "Content-Type: %s\r\n"
                    "Access-Control-Allow-Origin: %s\r\n"
                    "Cross-Origin-Resource-Policy: cross-origin\r\n"
                    "Cross-Origin-Embedder-Policy: require-corp\r\n"
                    "\r\n"
                ),
                st.st_size,
                ct,
                _1_2_HOST
            );

            rl += read(fd, (resp + rl), (RESPONSE_SIZE - rl));
            
            write(cfd,resp,rl);

            
            
            // while ((rl = read(fd, resp, RESPONSE_SIZE)) > 0) {
            //     write(cfd, resp, rl);
            // }
            
            close(fd);
        }

        close(cfd);
    }

    close(sfd);
    
    return 0;
}
