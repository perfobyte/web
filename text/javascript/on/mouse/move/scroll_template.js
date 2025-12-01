
export default (
    (
        list,
        style_state,
        
        get_scrolled,
        get_scrollbar_size,

        set_list_scroll,

        scrollbar,
        scrollbar_thumb_style,

        get_scroll_size,
        scrollbar_thumb_transform,
        get_scale,
        
        set_scroll,
    ) => {
        return (e) => {
            var
                scrolled = get_scrolled(e,style_state,e.currentTarget,scrollbar),
                scrollbar_size = get_scrollbar_size(scrollbar),

                ratio = (scrolled / scrollbar_size),
                list_scroll = (ratio * get_scroll_size(list))
            ;
            return void (
                set_scroll(
                    scrollbar_thumb_style,
                    scrollbar_thumb_transform(
                        scrolled,
                        get_scale(style_state)
                    ),
                    set_list_scroll,
                    list,
                    list_scroll,
                )
            );
        }
    }
);
