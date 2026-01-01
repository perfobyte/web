
// transform = scrollbar_thumb_y_transform
// scale = S.thumb_y_scale
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
                    S.thumb_y_translate = (
                        (
                            top
                            / S.scroll_content_height
                        )
                        * S.scrollbar_content_height
                    )
                ),
                scale
            );
        
        list.scrollTop = top;

        S.scroll_top_lines = ((top - S.content_top) / S.row_height);
    }
);
