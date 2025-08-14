
#ifndef ENV_H
#define ENV_H

#include "../../../../../general/env/1/.h"

#include "import.h"



#define REQUEST_SIZE 8192
#define FS_SIZE 4096
#define RESPONSE_SIZE 256

#define HTML_SIZE 65536

#define PORT _1_2_PORT
#define ROUTE_COUNT 3

#define HTML_404_SIZE 1024
#define ROUTE_PATH_404 "w/h/404.html"

#define ROUTE_PATH_LENGTH 10

const uint
    route_length[] = {
        0,
        1,
        10,
    }
;

const char*
    route_file[] = {
        "w/h/_/.html",
        "w/j/sw.js",
        "w/robots.txt",
    }
;
const char*
    route_type[] = {
        "text/html",
        "text/javascript",
        "text/plain",
    }
;
const char*
    route_header[] = {
        "Cross-Origin-Opener-Policy: same-origin\r\n"
        "Cross-Origin-Embedder-Policy: require-corp\r\n",
        "",
        ""
    }
;

const char
    route_path[ROUTE_PATH_LENGTH * ROUTE_COUNT] = (
        "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"
        "s\x00\x00\x00\x00\x00\x00\x00\x00\x00"
        "robots.txt"
    )
;

#define RP_LN 1

html_replacement
    rp[RP_LN] = {
        {"sc", _1_1_HOST}
    }
;



#endif
