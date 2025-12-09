
export default (
    (support_font_format, font_id, font_name, i,l, font_path) => {
        var
            last_i = (l - 1),
            f = null,
            font_face_src = ""
        ;
        for(;i<l;i++){
            f = support_font_format[i];
            font_face_src +=
                `url("${
                    font_path(
                        font_id,
                        f.extension
                    )
                }${
                    (f.id === 4)
                    ? `#${font_name}`
                    : ""
                }") format("${
                    f.format
                }")${
                    (last_i === i)
                    ? ""
                    : ","
                }`
        };
        return (font_face_src);
    }
);
