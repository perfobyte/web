

export default (
    (e, e_key, _) => {
        var
            scroll_x = _.scroll_x,
            min = _.min,
            S = _.S,
            list = _.list,
            scrollbar_thumb_x_style = _.scrollbar_thumb_x_style,
            scrollbar_thumb_x_transform = _.scrollbar_thumb_x_transform
        ;
        scroll_x(
            min(S.width_scroll_content, (list.scrollLeft + S.width_symbol)),
            S.scale_thumb_x,
            S,
            
            list,
            scrollbar_thumb_x_style,

            scrollbar_thumb_x_transform,
        );
    }
)