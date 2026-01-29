

export default (
    (e, e_key, _) => {
        var
            scroll_x = _.scroll_x,
            S = _.S,
            list = _.list,
            scrollbar_thumb_x_style = _.scrollbar_thumb_x_style,
            scrollbar_thumb_x_transform = _.scrollbar_thumb_x_transform
        ;
        scroll_x(
            0,
            S.scale_thumb_x,
            S,
            
            list,
            scrollbar_thumb_x_style,

            scrollbar_thumb_x_transform,
        );
    }
)