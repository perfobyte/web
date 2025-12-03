

export default (
    (
        scrollbar_thumb_x_style,
        scrollbar_thumb_y_style,

        scrollbar_thumb_x_transform,
        scrollbar_thumb_y_transform,

        style_state,
        chat_state,
        
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

        recalc_rows_increased_width,
        recalc_rows_decreased_width,

        template,
        text_width_container,
        dom_text_width,
        message_append,
        messages_push,

        message_to_html,

        append_child,
        get_null,
    ) => {
        var
            zoom_prev = style_state.zoom_prev,
            zoom = style_state.zoom,

            messages = chat_state.messages,

            row_height = style_state.row_height,
            loaded_height = chat_state.loaded_height,

            rows = list.children,
            row_l = rows.length,

            messages_l = chat_state.loaded
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
            ),

            (
                chat_state.loaded_height = (
                    (
                        (list_width > prev_list_width)
                        ||
                        (zoom > zoom_prev)
                    )
                    ? recalc_rows_increased_width(
                        messages,
                        0,
                        messages_l,

                        rows,
                        0,
                        row_l,

                        row_height,
                        loaded_height,
                        list_width,

                        template,
                        messages_fragment,
                        text_width_container,

                        dom_text_width,
                        message_append,
                        messages_push,

                        message_to_html,
                        append_child,
                    )
                    : recalc_rows_decreased_width(
                        messages,
                        0,
                        messages_l,

                        rows,
                        0,
                        row_l,

                        row_height,
                        loaded_height,
                        list_width,

                        messages_range,
                        text_width_container,
                        dom_text_width,
                        message_append,
                        
                        get_null,
                    )
                )
            )
        );
    }
);
