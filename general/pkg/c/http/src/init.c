
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>

int http_init(int port, struct sockaddr_in* addr, int *opt) {
    int server_fd;

    if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == -1) {
        perror("socket");
        exit(1);
    };

    if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR, opt, sizeof(int)) == -1) {
        perror("setsockopt");
        close(server_fd);
        exit(1);
    }

    addr->sin_family = AF_INET;
    addr->sin_port = htons(port);
    addr->sin_addr.s_addr = INADDR_ANY;

    

    if (bind(server_fd, (struct sockaddr *)addr, sizeof(*addr)) == -1) {
        perror("bind");
        close(server_fd);
        exit(1);
    }

    if (listen(server_fd, 10) == -1) {
        perror("listen");
        close(server_fd);
        exit(1);
    }

    

    printf("%d\n", port);

    return server_fd;
}
