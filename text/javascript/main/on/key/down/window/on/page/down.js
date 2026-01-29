

export default (
    (e, e_key, _) => {
        var
            scroll_y = _.scroll_y,
            min = _.min,
            S = _.S,
            list = _.list,
            scrollbar_thumb_y_style = _.scrollbar_thumb_y_style,
            scrollbar_thumb_y_transform = _.scrollbar_thumb_y_transform
        ;
        scroll_y(
            min(S.height_scroll_content, (list.scrollTop + S.height_list)),
            S.scale_thumb_y,
            S,
            
            list,
            scrollbar_thumb_y_style,

            scrollbar_thumb_y_transform,
        );
    }
)