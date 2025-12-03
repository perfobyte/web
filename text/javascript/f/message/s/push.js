export default (
    (
        messages,

        i,
        l,

        row_height,
        loaded_height,

        fragment,
        template,

        message_to_html,
        message_append,

        text_width_container,
        dom_text_width,

        max_width,

        append_child,
    ) => {
        var
            message = null,
            lines = null
        ;
        while(i<l){
            message = messages[i++];
            lines = message.lines;

            loaded_height = (
                message_to_html(
                    message.value,
                    lines,
                    0,
                    lines.length,
                    loaded_height,

                    fragment,
                    template,

                    row_height,
                    message_append,

                    text_width_container,
                    dom_text_width,

                    max_width,

                    append_child,
                )
            );
        };
        
        return loaded_height;
    }
);
