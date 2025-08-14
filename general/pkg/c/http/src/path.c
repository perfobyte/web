
unsigned int http_path(    
    unsigned int l,
    char* b
) {
    char c;
    while (
        ((c = b[ l ]) != ' ')
        &&
        (c != '\0')
    ) {
        l++;
    };
    return l;
}