
export default (
    (
        list,
        style_state,
        
        get_scrolled,
        get_scrollbar_size,

        set_list_scroll,

        scrollbar,
        scrollbar_thumb,

        get_scroll_size,
        scrollbar_thumb_transform,
        get_scale,
        
    ) => {
        return (e) => {
            var
                scrolled = get_scrolled(e,style_state,e.currentTarget,scrollbar_thumb,scrollbar),
                scrollbar_size = get_scrollbar_size(scrollbar),

                ratio = scrolled / scrollbar_size,
                list_scroll = (ratio * get_scroll_size(list))
            ;
            
            return void (
                (scrollbar_thumb.style.transform = scrollbar_thumb_transform(
                    scrolled,
                    get_scale(style_state)
                )),
                set_list_scroll(list, list_scroll)
            );
        }
    }
);
