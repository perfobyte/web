
#include "env.h"

int main() {
    uint
        sfd, fd, cfd, opt = 1,
        pi, pl,
        H_SIZE,
        rl,
        raw_size
    ;
    
    char
        b[REQUEST_SIZE],
        resp[RESPONSE_SIZE],

        resp_404[] = "HTTP/1.1 404 Not Found\r\nContent-Length: 0\r\nConnection: close\r\n\r\n"        
    ;
    struct sockaddr_in addr;
    struct stat st;

    socklen_t addrlen;

    sfd = http_init(PORT, &addr, &opt);
    addrlen = sizeof(addr);

    a: while (1) {
        if ((cfd = accept(sfd, (struct sockaddr *)&addr, &addrlen)) == -1) {
            printf("accept\n");
            continue;
        }
        
        read(cfd, b, REQUEST_SIZE);

        pl = http_path((pi = http_method(b)), b);

        write(cfd, resp_404, SIZE_404);

        close(cfd);
    }

    close(sfd);
    
    return 0;
}
