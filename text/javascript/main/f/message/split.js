

export default (
    (lines,src, char, i,l, src_i,src_l) => {
        
        a: while (i<l) {
            lines[i++] = src_i;
            
            b: {
                for(;src_i < src_l;src_i++) {
                    if ((src[src_i]) === char) {
                        lines[i++] = (src_i++);
                        break b;
                    }
                };
                lines[i] = (src_i);
                break a;
            };
        };
        return i;
    }
);
