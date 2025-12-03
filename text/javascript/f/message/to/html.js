

export default (
    (
        src,
        lines,
        i,
        l,
        loaded_height,

        list,
        template,

        row_height,
        message_append,

        text_width_container,
        dom_text_width,

        max_width,

        append_child,
    ) => {
        var
            number = 0,

            cloned = null
        ;

        if (l > 2) {
            while (i < l) {
                loaded_height = message_append(
                    (template.cloneNode(true)),
                    src.substring(lines[i++], lines[i++]),

                    append_child,
                    list,
                    
                    loaded_height,
                    row_height,

                    text_width_container,
                    dom_text_width,

                    max_width,
                );
            };
        }
        else {
            loaded_height = message_append(
                (template.cloneNode(true)),
                src,

                append_child,
                list,
                
                loaded_height,
                row_height,

                text_width_container,
                dom_text_width,

                max_width,
            );
        };

        return (loaded_height);
    }
)