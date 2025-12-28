
export default (
    (support_font_format, font_sid, i,l, font_path) => {
        var
            last_i = (l - 1),
            f = null,
            src = ""
        ;
        for(;i<l;i++){
            f = support_font_format[i];
            src += (
                `url("${
                    font_path(
                        f.extension,
                        font_sid,
                    )
                }${
                    (f.id === 4)
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
