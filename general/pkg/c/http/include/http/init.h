#ifndef HTTP_INIT_H
#define HTTP_INIT_H

#include <netinet/in.h>

int http_init(int port, struct sockaddr_in* addr, int *opt);

#endif
