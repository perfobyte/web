

export default (
    (
        scrollbar_thumb_x_style,
        scrollbar_thumb_y_style,

        scrollbar_thumb_x_transform,
        scrollbar_thumb_y_transform,

        style_state,
        
        list,
        messages_fragment,
        messages_range,

        min,

        list_width,
        list_height,

        list_scroll_width,
        list_scroll_height,

        prev_list_width,
        prev_list_height,

        template,
        text_width_container,
        dom_text_width,
        
        append_child,
        get_null,
    ) => {
        return (
            (
                scrollbar_thumb_x_style
                .transform = (
                    scrollbar_thumb_x_transform(
                        style_state.thumb_x_translate,
                        (
                            style_state
                            .thumb_x_scale = (
                                min(
                                    1,
                                    (
                                        list_width
                                        / list_scroll_width
                                    )
                                )
                            )
                        )
                    )
                )
            ),

            (
                scrollbar_thumb_y_style
                .transform = (
                    scrollbar_thumb_y_transform(
                        style_state.thumb_y_translate,
                        
                        (
                            style_state
                            .thumb_y_scale = (
                                min(
                                    1,
                                    (
                                        list_height
                                        / list_scroll_height
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
);
