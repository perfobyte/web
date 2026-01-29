

export default (
    (e,e_key, _) => {
        var
            max = _.max,
            scroll_x = _.scroll_x,
            list = _.list,
            S = _.S,
            scrollbar_thumb_x_style = _.scrollbar_thumb_x_style,
            scrollbar_thumb_x_transform = _.scrollbar_thumb_x_transform
        ;
        scroll_x(
            max(0, (list.scrollLeft - S.width_list)),
            S.scale_thumb_x,
            S,
            
            list,
            scrollbar_thumb_x_style,

            scrollbar_thumb_x_transform,
        );
    }
)