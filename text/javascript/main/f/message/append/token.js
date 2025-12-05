export default (
    (
        element,
        src,

        appendChild,
        list,
        
        start,
        row_height,

        text_width_container,
        dom_text_width,

        max_width,
    ) => {
        var
            i = 0,
            l = src.length,

            loaded_chars = "",
            chars = ""
        ;

        while (i<l) {
            (
                (
                    dom_text_width(
                        text_width_container,
                        (chars += src[i++])
                    )
                )
                > max_width
            )
            ? (
                ((element.style).top = `${start}px`),
                (start += row_height),

                ((element.firstElementChild).textContent = loaded_chars),

                (
                    loaded_chars =
                    chars =
                        ""
                ),

                appendChild(list, element),

                (element = element.cloneNode(true))
            )
            : (
                loaded_chars = chars
            );
        };

        if (loaded_chars) {
            (element.style).top = `${start}px`;
            start += row_height;

            (element.firstElementChild).textContent = loaded_chars;

            appendChild(list, element);
        };

        return (start);
    }
);
