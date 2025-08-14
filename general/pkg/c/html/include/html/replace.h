
#ifndef HTML_REPLACE_H
#define HTML_REPLACE_H

#include "replacement.h"

uint html_replace(
    char *b,
    html_replacement *rp,
    uint rp_l,
    
    uint length,
    uint max_length
);

#endif
