
// s = globalThis.atob(base64);

export default (
    (_,s,i,l) => {
        for (; i < l; i++) {
            _[i] = s.charCodeAt(i);
        }
        return _;
    }
);
