

export default (
    (buffer,src, i,l) => {
        for (; i < l; i++) {
            buffer[i] = String.fromCharCode(src[i]);
        }
        return globalThis.btoa(buffer.join(""));
    }
)