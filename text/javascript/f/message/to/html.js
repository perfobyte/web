

export default (
    (
        src,
        lines,
        rows,
        i,
        l,
        start,

        list,
        template,
        chat_state,
        row_height,
        message_append,
    ) => {
        var
            number = 0
        ;
        if (rows > 1) {
            start = message_append(
                template,
                "f",
                src.substring(lines[i++], lines[i++]),
                list,

                start,
                row_height
            );
            l -= 2;

            while (i < l) {
                start = message_append(
                    template.cloneNode(true),
                    "i",
                    src.substring(lines[i++], lines[i++]),
                    list,

                    start,
                    row_height
                );
            }

            start = message_append(
                template.cloneNode(true),
                "l",
                src.substring(lines[i++], lines[i++]),
                list,

                start,
                row_height
            );
        }
        else {
            start = message_append(template,"o",src,list, start,row_height);
        };
        return (start);
    }
)