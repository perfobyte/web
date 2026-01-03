
// transform = scrollbar_thumb_x_transform
// scale = S.scale_thumb_x
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
                    S.translate_thumb_x = (
                        (
                            left
                            / S.width_scroll_content
                        )
                        * S.width_scrollbar_content
                    )
                ),
                scale
            )
        );
        
        list.scrollLeft = left;

        S.lines_y = ((left - S.left_content) / (S.height_row));
    }
);
