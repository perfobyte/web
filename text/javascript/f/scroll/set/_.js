

export default (
    (
        scrollbar_thumb_style,
        transform_value,

        set_list_scroll,
        list,
        new_scroll_value
    ) => {
        return (
            (
                scrollbar_thumb_style
                .transform =
                    transform_value
            ),
            set_list_scroll(list, new_scroll_value)
        );
    }
);
