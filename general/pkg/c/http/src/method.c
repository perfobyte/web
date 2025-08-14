
unsigned int http_method(char b[]) {
    return (
        ((b[0] == 'G')&&(b[1]=='E')&&(b[2]=='T'))
        ? 5
        : (
        ((b[0] == 'P')&&(b[1]=='O')&&(b[2]=='S')&&(b[3]=='T'))
        ? 6
        : 0
    ));
}
