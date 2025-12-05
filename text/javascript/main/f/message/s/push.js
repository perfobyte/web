export default (
    (
        chat_value,
        messages_lines,
        messages_dom,

        i,
        l,

        row_height,
        loaded_height,

        fragment,
        template,

        message_append,

        text_width_container,
        dom_text_width,

        max_width,

        append_child,
    ) => {
        var
            message = null,
            
            lines_i = 0,
            lines_l = 0,
            element = null,

            message_value = ""
        ;
        while (i < l) {
            message = messages[i++];
            message_value = message.value;
            
            lines_i = 0;
            lines_l = messages_lines.length;

            while (lines_i < lines_l) {
                element = messages_dom[lines_i];

                (element.firstElementChild).textContent = (
                    message_value.substring(
                        messages_lines[lines_i++],
                        messages_lines[lines_i++]
                    )
                );

                (element.style).top = `${start}px`;

                append_child(fragment, element);
                loaded_height += row_height;
            };
        };
        
        return loaded_height;
    }
);
