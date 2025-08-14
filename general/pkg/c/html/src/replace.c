#include <stddef.h>
#include <string.h>
#include <stdio.h>

#include "../include/html/replacement.h"

unsigned int html_replace(
    char *b,
    html_replacement *rp,
    unsigned int rp_l,
    
    unsigned int length,
    unsigned int max_length
) {
    unsigned int
        i = 0,
        ml = length - 5
    ;
    unsigned int
        j,
        repl_len,
        delta
    ;
    const char
        *replacement = NULL
    ;
    char
        key[3]
    ;

    while (i < ml) {

        if (b[i] == '#' && b[i + 1] == '{' && b[i + 4] == '}') {
            key[0] = b[i + 2];
            key[1] = b[i + 3];
            key[2] = '\0';

            replacement = NULL;
            j = 0;
            for (; rp[j].key[0]; j++) {
                if (strcmp(key, rp[j].key) == 0) {
                    replacement = rp[j].value;
                    break;
                }
            }

            if (replacement) {
                if (length + (delta = (repl_len = strlen(replacement)) - 5) >= max_length) {
                    fprintf(stderr, "Buffer overflow risk during replacement\n");
                    return length;
                }

                memmove(b + i + repl_len, b + i + 5, length - (i + 5));
                memcpy(b + i, replacement, repl_len);

                length += delta;
                i += repl_len;
            } else {
                i++;
            }
        }
        else {
            i++;
        }
    }

    return length;
}