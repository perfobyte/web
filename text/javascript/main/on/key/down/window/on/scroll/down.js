

export default (
    (e, e_key, _) => {
        var
            scroll_y = _.scroll_y,
            S = _.S,
            list = _.list,
            scrollbar_thumb_y_style = _.scrollbar_thumb_y_style,
            scrollbar_thumb_y_transform = _.scrollbar_thumb_y_transform
        ;
        scroll_y(
            S.height_scroll_content,
            S.scale_thumb_y,
            S,
            
            list,
            scrollbar_thumb_y_style,

            scrollbar_thumb_y_transform,
        );
    }
);