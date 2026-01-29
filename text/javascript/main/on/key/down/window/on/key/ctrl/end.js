

export default (
    (e, e_key, gather) => {
        var
            scroll_y = gather.scroll_y,
            S = gather.S,
            list = gather.list,
            scrollbar_thumb_y_style = gather.scrollbar_thumb_y_style,
            scrollbar_thumb_y_transform = gather.scrollbar_thumb_y_transform
        ;
        
        scroll_y(
            (S.height_scroll_content),
            S.scale_thumb_y,
            S,
            
            list,
            scrollbar_thumb_y_style,
            scrollbar_thumb_y_transform,
        );
    }
)