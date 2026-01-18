
export default (
    (src,char,found, i,l) => {
        while (i<l) {
            (char === src[i++]) && (found++);
        };
        return found;
    }
);
