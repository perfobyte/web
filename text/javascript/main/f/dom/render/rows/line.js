
export default (
    (
        tags,
        tags_i,
        tags_l,

        elements,
        elements_i,

        content,
    ) => {
        var
            element = null,
            inline = null,

            tags_value_to = tags[tags_i]
        ;
        while (tags_i < tags_l) {
            element = elements[elements_i++];
            inline = element.firstElementChild;
            
            inline.textContent = (
                content
                .substring(
                    (tags_value_to),
                    (tags_value_to = tags[++tags_i]),
                )
            );
        };

        return (0);
    }
)