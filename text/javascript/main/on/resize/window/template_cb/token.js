

export default (
    (
        scrollbar_thumb_x_style,
        scrollbar_thumb_y_style,

        scrollbar_thumb_x_transform,
        scrollbar_thumb_y_transform,

        style_state,

        min,

        list_width,
        list_height,

        list_scroll_width,
        list_scroll_height,

        prev_list_width,
        prev_list_height,

        recalc_rows_increased_width,
        recalc_rows_decreased_width,
    ) => {
        var
            zoom_prev = style_state.zoom_prev,
            zoom = style_state.zoom
        ;
        return (
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
