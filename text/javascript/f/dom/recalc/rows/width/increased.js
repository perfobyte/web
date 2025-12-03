

export default (
    (
        messages,
        i,
        l,

        rows,
        row_i,
        row_l,

        row_height,
        loaded_height,
        max_width,

        template,
        messages_fragment,
        text_width_container,

        dom_text_width,
        message_append,
        messages_push,

        message_to_html,
        append_child,
    ) => {
        var
            row = null,
            inline = null,

            message = null,
            message_value = "",
            lines = null,

            lines_i = 0,
            lines_l = 0,

            content = "",
            visual_row_content = "",
            row_content = "",

            content_length = 0,
            to_next_i = 0,

            to_next = ""
        ;

        a: while (i < l) {
            message = messages[i++];
            message_value = message.value;
            lines = message.lines;

            lines_i = 0;
            lines_l = lines.length;

            while (lines_i < lines_l) {

                if (row_i < row_l) {
                    row = rows[row_i++];
                    inline = row.firstElementChild;
                }
                else {
                    break a;
                };
                
                to_next_i = (content_length = ((
                    content = (
                        (to_next)
                        ||
                        message_value.substring(lines[lines_i++], lines[lines_i++])
                    )
                ).length));

                while (
                    (
                        dom_text_width(
                            text_width_container,
                            (visual_row_content = content.substring(0, to_next_i))
                        )
                    ) > max_width
                ) {
                    to_next_i--;
                };

                if (to_next_i < content_length) {
                    inline.textContent = visual_row_content;
                    to_next = content.substring(to_next_i, content_length);
                }
                else {
                    inline.textContent = content;
                    to_next = "";
                };
            }
        };

        if (lines_i < lines_l) {
            row_content = message_value.substring(lines[lines_i++], lines[lines_i++]);

            loaded_height = message_append(
                (template.cloneNode(true)),
                (to_next ? to_next + row_content : row_content),

                append_child,
                messages_fragment,

                loaded_height,
                row_height,

                text_width_container,
                dom_text_width,

                max_width,
            );
            
            while (lines_i < lines_l) {
                loaded_height = message_append(
                    (template.cloneNode(true)),
                    message_value.substring(lines[lines_i++], lines[lines_i++]),
    
                    append_child,
                    messages_fragment,

                    loaded_height,
                    row_height,
    
                    text_width_container,
                    dom_text_width,
    
                    max_width,
                );
            }
        }
        else if (to_next) {
            loaded_height = message_append(
                (template.cloneNode(true)),
                (to_next),

                append_child,
                messages_fragment,

                loaded_height,
                row_height,

                text_width_container,
                dom_text_width,

                max_width,
            );
        };

        if (i < l) {
            loaded_height = messages_push(
                messages.slice(i,l),
                0,
                (l-i),

                row_height,
                loaded_height,

                messages_fragment,
                template,

                message_to_html,
                message_append,
                
                text_width_container,
                dom_text_width,

                max_width,

                append_child,
            );
        }

        return loaded_height;
    }
);
