

export default (
    (s,c,v, i,l) => {
        for(;i<l;i++) {
            (c === s[i]) && (v++);
        };
        return v;
    }
)