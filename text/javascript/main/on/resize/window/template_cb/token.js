

export default (
    (
        scrollbar_thumb_x_style,
        scrollbar_thumb_y_style,

        scrollbar_thumb_x_transform,
        scrollbar_thumb_y_transform,

        state_style,

        min,

        width_list,
        height_list,

        list_scroll_width,
        list_scroll_height,

        prev_list_width,
        prev_list_height,
    ) => {
        var
            zoom_prev = state_style.zoom_prev,
            zoom = state_style.zoom
        ;
        return (
            (
                scrollbar_thumb_y_style
                .transform = (
                    scrollbar_thumb_y_transform(
                        state_style.translate_thumb_y,
                        
                        (
                            state_style
                            .scale_thumb_y = (
                                min(
                                    1,
                                    (
                                        height_list
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
