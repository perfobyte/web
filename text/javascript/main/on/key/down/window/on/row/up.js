

export default (
    (e, e_key, _) => {
        var
            scroll_y = _.scroll_y,
            max = _.max,
            S = _.S,
            list = _.list,
            scrollbar_thumb_y_style = _.scrollbar_thumb_y_style,
            scrollbar_thumb_y_transform = _.scrollbar_thumb_y_transform
        ;
        scroll_y(
            max(0, (list.scrollTop - S.height_row)),
            S.scale_thumb_y,
            S,
            
            list,
            scrollbar_thumb_y_style,

            scrollbar_thumb_y_transform,
        );
    }
)