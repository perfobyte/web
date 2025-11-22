export default (
    (
        list,
        messages,

        i,
        l,

        chat_state,
        row_height,
        document,

        MESSAGE_EL,
        MESSAGE_ROW_EL,

        message_to_html,
        message_append,
    ) => {
        var
            message = null,
            fragment = document.createDocumentFragment(),
            block = null,
            lines = null,
            loaded_height = chat_state.loaded_height
        ;
        for(;i<l;i++){
            message = messages[i];
            lines = message.lines;

            (
                block = (
                    MESSAGE_EL
                    .cloneNode(true)
                )
            )
            .setAttribute("data-a", message.id);

            loaded_height = (
                message_to_html(
                    message.value,
                    lines,
                    message.rows,
                    0,
                    lines.length,
                    loaded_height,

                    block,
                    MESSAGE_ROW_EL.cloneNode(true),
                    chat_state,
                    row_height,
                    message_append,
                )
            );
            
            fragment.appendChild(block);
        };

        list.appendChild(fragment);

        chat_state.loaded += i;
        chat_state.loaded_height = loaded_height;

        return i;
    }
);
