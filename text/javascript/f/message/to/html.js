

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
            message_append(
                template,
                "f",
                src.substring(lines[0], lines[1]),
                `${start}px`,
                list
            );
            start += row_height;
            i += 2;
            l -= 2;

            while (i < l) {
                message_append(
                    template.cloneNode(true),
                    "i",
                    src.substring(lines[i++], lines[i++]),
                    `${start}px`,
                    list
                );
                start += row_height;
            }

            message_append(
                template.cloneNode(true),
                "l",
                src.substring(lines[i++], lines[i++]),
                `${start}px`,
                list
            );
        }
        else {
            message_append(template,"o",src,`${start}px`,list);
        };
        return (start + row_height);
    }
)