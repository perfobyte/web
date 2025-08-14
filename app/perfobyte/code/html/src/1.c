
#include "env.h"

int main() {
    FILE* fd;
    struct
        sockaddr_in addr
    ;

    int
        sfd,
        cfd,
        opt = 1
    ;
    sfd = http_init(PORT, &addr, &opt);

    char*
        route_block = NULL
    ;
    char
        check,

        resp[RESPONSE_SIZE],
        load_path[ROUTE_PATH_LENGTH],

        b[REQUEST_SIZE],
        
        route_content[ROUTE_COUNT][HTML_SIZE],

        resp_404[HTML_404_SIZE]
    ;
    
    uint
        resp_l,

        html_length,

        path_i = 0,
        path_l,

        path_o,


        path_length,

        path_index,

        symb,

        exist_path_o = 0,
        
        route_size[ROUTE_COUNT],
        length_404
    ;

    socklen_t
        addrlen = sizeof(addr)
    ;

    memcpy(
        resp_404,
        "HTTP/1.1 200 OK\r\n"
        "Content-Type: text/html\r\n\r\n",
        (length_404 = 44)
    );

    length_404 += (
        fread(
            resp_404 + length_404,
            1,
            HTML_404_SIZE - length_404,
            (fd = fopen(ROUTE_PATH_404,"rb"))
        )
    );

    fclose(fd);
    
    for (
        ;
        path_i < ROUTE_COUNT;
        path_i++
    ) {
        html_length = (
            snprintf(
                (route_block = route_content[path_i]),
                HTML_SIZE,
                (
                    "HTTP/1.1 200 OK\r\n"
                    "Content-Type: %s\r\n"
                    "%s\r\n"
                ),
                route_type[path_i],
                route_header[path_i]
            )
        );

        route_size[path_i] = (
            html_replace(
                route_block,
                rp,
                RP_LN,
                (
                    html_length
                    +
                    fread(
                        route_block + html_length,
                        1,
                        HTML_SIZE - html_length,
                        (
                            fd = (
                                fopen(
                                    route_file[path_i],
                                    "rb"
                                )
                            )
                        )
                    )
                ),
                HTML_SIZE
            )
        );

        fclose(fd);
    }
    
    a: while (1) {
        if ((cfd = accept(sfd, (struct sockaddr *)&addr, &addrlen)) == -1) {
            printf("accept\n");
            continue;
        }
        
        read(cfd, b, REQUEST_SIZE);

        path_l = http_query_path((path_i = http_method(b)), b);

        path_length = (path_l - path_i);

        printf("%d /%.*s\n", PORT, path_length, b + path_i);
        
        path_index = 0;
        
        b: for (
            ;
            path_index < ROUTE_COUNT;
            path_index++
        ) {
            

            if (path_length == route_length[path_index]) {
                symb = path_i;
                path_o = path_index * ROUTE_PATH_LENGTH;
                
                for (
                    ;
                    symb < path_l;
                    ((symb++), (path_o++))
                ) {
                    if (route_path[path_o] != b[symb]) {
                        path_index++;
                        goto b;
                    }
                }


                html_length = (
                    snprintf(
                        (route_block = route_content[path_index]),
                        HTML_SIZE,
                        (
                            "HTTP/1.1 200 OK\r\n"
                            "Content-Type: %s\r\n"
                            "%s\r\n"
                        ),
                        route_type[path_index],
                        route_header[path_index]
                    )
                );
                
                write(
                    cfd,
                    route_block,
                    html_replace(
                        route_block,
                        rp,
                        RP_LN,
                        (
                            html_length
                            +
                            fread(
                                route_block + html_length,
                                1,
                                HTML_SIZE - html_length,
                                (
                                    fd = (
                                        fopen(
                                            route_file[path_index],
                                            "rb"
                                        )
                                    )
                                )
                            )
                        ),
                        HTML_SIZE
                    )
                );

                fclose(fd);
                close(cfd);
                goto a;
            }
        }

        
        write(cfd, resp_404, length_404);
        close(cfd);
    }

    close(sfd);
    
    return 0;
}
