

export default (
    (s) => {
        var
            i = 0,
            l = s.length,
            v = "",
            c = "",

            el = ""
        ;
        for(;i<l;i++) {
            if (
                ((c = s[i]) === "<")
            ) {
                el = "";
                while ((c = s[++i]) !== ">") {
                    el += c;
                }
                if (el === "/div") {
                    v += "\n";
                }
            }
            else {
                v += c;
            }
        };
        
        return (
            v.substring(0,i)
        );
    }
)