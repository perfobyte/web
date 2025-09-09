

export default (
    (_,s,i,l) => {
        for (; i < l; i++) {
            _[i] = String.fromCharCode(s[i]);
        }
        return globalThis.btoa(_.join(""));
    }
)