

export default (
    (src,char,found, i,l) => {
        for(;i<l;i++) {
            (char === src[i]) && (found++);
        };
        return found;
    }
);