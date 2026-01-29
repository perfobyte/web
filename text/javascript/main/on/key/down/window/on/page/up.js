

export default (
    (e,e_key,_) => {
        var
            list = _.list,
            S = _.S,
            max = _.max,
            scrollbar_thumb_y_style = _.scrollbar_thumb_y_style,
            scrollbar_thumb_y_transform = _.scrollbar_thumb_y_transform,
            scroll_y = _.scroll_y
        ;
        scroll_y(
            max(0, (list.scrollTop - S.height_list)),
            S.scale_thumb_y,
            S,
            
            list,
            scrollbar_thumb_y_style,

            scrollbar_thumb_y_transform,
        );
    }
)