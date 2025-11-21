export default (
    (
        list,
        messages,
        i,
        l,
        chat_state,
        document,

        MESSAGE_EL,
        MESSAGE_ROW_EL,

        message_to_html,
        message_height,
        message_append,
    ) => {
        var
            message = null,
            fragment = document.createDocumentFragment(),
            block = null,
            lines = null
        ;
        for(;i<l;i++){
            message = messages[i];
            lines = message.lines;

            (
                block =
                    MESSAGE_EL
                    .cloneNode(true)
            )
            .setAttribute("data-a",message.id);
            
            console.dir(lines);
            
            fragment.appendChild(
                message_to_html(
                    message.value,
                    lines,
                    message.rows,
                    0,
                    lines.length,

                    block,
                    MESSAGE_ROW_EL.cloneNode(true),
                    chat_state,
                    message_height,
                    message_append,
                )
            );
        };
        list.appendChild(fragment);
        chat_state.loaded += l;
        return i;
    }
);
