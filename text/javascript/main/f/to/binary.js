
// s = globalThis.atob(base64);

export default (
    (buffer,src, i,l) => {
        for (; i < l; i++) {
            buffer[i] = src.charCodeAt(i);
        }
        return buffer;
    }
);
