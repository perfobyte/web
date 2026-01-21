
export default (
    (support_structure_font, font_sid, i,l, font_path) => {
        var
            last_i = (l - 1),
            f = null,
            src = "",
            ext = ""
        ;
        for(;i<l;i++){
            f = support_structure_font[i];
            ext = f.extension;

            src += (
                `url("${
                    font_path(ext, font_sid)
                }${
                    (ext === "svg")
                    ? `#${font_sid}`
                    : ""
                }") format("${
                    f.type
                }")${
                    (last_i === i)
                    ? ""
                    : ","
                }`
            );
        };
        return (src);
    }
);
