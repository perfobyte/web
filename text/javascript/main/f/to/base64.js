

export default (
    (buffer,src, i,l, fromCharCode, btoa) => {
        for (; i < l; i++) {
            buffer[i] = fromCharCode(src[i]);
        }
        return btoa(buffer.join(""));
    }
)