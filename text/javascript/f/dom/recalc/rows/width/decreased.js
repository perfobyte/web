

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

        messages_range,
        text_width_container,
        dom_text_width,
        message_append,
        
        get_null,
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
                row = rows[row_i++];
                inline = row.firstElementChild;

                row_content = message_value.substring(lines[lines_i++], lines[lines_i++]);
                
                content = (
                    to_next
                    ? (to_next + row_content)
                    : (row_content)
                );
                
                to_next_i = (content_length = (content.length));

                while (
                    (
                        dom_text_width(
                            text_width_container,
                            (visual_row_content = content.substring(0,to_next_i))
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

        if (to_next) {
            row = rows[row_i];
            loaded_height = message_append(
                row,
                (to_next),

                get_null,
                null,

                ((row_i++)*row_height),
                row_height,

                text_width_container,
                dom_text_width,

                max_width,
            );
        };

        if (row_i < row_l) {
            messages_range.setStartBefore(rows[row_i]);
            messages_range.setEndAfter(rows[row_l - 1]);
            messages_range.deleteContents();

            loaded_height -= (
                (
                    row_l
                    - row_i
                )
                * row_height
            );
        };

        return (loaded_height);
    }
);
