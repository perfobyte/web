
// transform = scrollbar_thumb_y_transform
// scale = S.scale_thumb_y
// scrollbar_thumb_y_transform
// thumb_style = scrollbar_thumb_y_style

export default (
    (
        top,
        scale,
        
        S,

        list,
        thumb_style,

        transform,
    ) => {
        thumb_style
        .transform =
            transform(
                (
                    S.translate_thumb_y = (
                        (
                            top
                            / S.height_scroll_content
                        )
                        * S.height_scrollbar_content
                    )
                ),
                scale
            );
        
        list.scrollTop = top;

        S.lines_x = ((top - S.top_content) / S.height_row);
    }
);
