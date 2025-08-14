
unsigned int http_query_path(    
    unsigned int l,
    char* b
) {
    char c;
    while (
        ((c = b[ l ]) != ' ')
        &&
        (c != '\0')
        &&
        (c != '?')
    ) {
        l++;
    };
    return l;
}