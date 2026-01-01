
// transform = scrollbar_thumb_x_transform
// scale = S.thumb_x_scale
// scrollbar_thumb_x_transform
// thumb_style = scrollbar_thumb_x_style

export default (
    (
        left,
        scale,
        
        S,

        list,
        thumb_style,

        transform,
    ) => {
        thumb_style
        .transform = (
            transform(
                (
                    S.thumb_x_translate = (
                        (
                            left
                            / S.scroll_content_width
                        )
                        * S.scrollbar_content_width
                    )
                ),
                scale
            )
        );
        
        list.scrollLeft = left;

        S.scroll_left_lines = ((left - S.content_left) / (S.row_height));
    }
);
