

export default (
    (e, e_key, gather) => {
        var
            scroll_y = gather.scroll_y,
            scrollbar_thumb_y_style = gather.scrollbar_thumb_y_style,
            scrollbar_thumb_y_transform = gather.scrollbar_thumb_y_transform,
            S = gather.S,
            list = gather.list
        ;
            
        scroll_y(
            0,
            S.scale_thumb_y,
            S,
            
            list,
            scrollbar_thumb_y_style,
            scrollbar_thumb_y_transform,
        );
    }
)