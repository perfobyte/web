
// i = 0,
// l = alloc_state.length_loaded_elements,

export default (
    new_zoom,

    elements,
    i,
    l,
    
    S,
    
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
    array_from,
    template_clone,

    fragment,
    list,
    text_width_container,

    html_style,
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
) => {
    var
        max = Math.max,
        min = Math.min,

        list_width = S.list_width,
        list_height = S.list_height,

        content_top = S.content_top,
        content_left = S.content_left,

        content_height = content_top,
        content_width = content_left,

        left = S.scrollLeft,
        top = S.scrollTop,

        row_height = (S.row_height = S.row_height_default * new_zoom),

        px = 0,
        
        scroll_top_lines = S.scroll_top_lines,
        scroll_left_lines = S.scroll_left_lines,
        
        prev_zoom = S.zoom,
        ratio = new_zoom / prev_zoom,

        content_bottom = (S.content_bottom = ((list_height) - (row_height))),

        font_size = (S.font_size = (S.font_size_default * new_zoom)),

        scale_x = 0,
        scale_y = 0,

        max_left = 0,
        max_top = 0,

        max_width = 0,

        element = null,
        inline = null,
        
        row_width = 0,

        node_i = 0,
        node_l = 0,

        nodes = null,
        
        thumb_x_width = 0,
        thumb_y_height = 0,

        scrollbar_x_width = S.scrollbar_x_width,
        scrollbar_y_height = S.scrollbar_y_height,

        scrollbar_content_width = 0,
        scrollbar_content_height = 0
    ;

    html_style.setProperty("--row-height", `${row_height}px`);
    html_style.setProperty("--font-size", `${font_size}px`);

    for (;i < l; i++) {
        element = elements[i];
        inline = element.firstElementChild;

        text_width_container.className = (inline.className);

        nodes = inline.childNodes;
        node_i = 0;
        node_l = nodes.length;
        
        while (node_i < node_l) {
            fragment.appendChild(nodes[node_i++].cloneNode(true))
        };
        text_width_container.replaceChildren(fragment);
        
        px = (text_width_container.getBoundingClientRect().width);
        max_width = max(max_width, px);

        // inline.style.width = `${px}px`;

        element.style.top = `${content_height}px`;

        content_height += row_height;
    };

    S.loaded_height = (content_height - content_top);
    S.content_height = (content_height += content_bottom);
    S.zoom = new_zoom;
    
    S.loaded_width = max_width;

    row_width = (S.row_width = (max_width + S.content_right));

    S.content_width = (content_width += (row_width));

    html_style.setProperty("--row-width", `${row_width}px`);

    html_style.setProperty("--content-height",`${content_height}px`);
    html_style.setProperty("--content-width",`${content_width}px`);

    max_left = (S.scroll_content_width = max(0,(content_width - list_width)));
    max_top = (S.scroll_content_height = max(0,(content_height - list_height)));

    scale_x = (S.thumb_x_scale = min(1, (list_width / content_width)));
    scale_y = (S.thumb_y_scale = min(1, (list_height / content_height)));

    scrollbar_content_width = (S.scrollbar_content_width = (scrollbar_x_width * (1 - scale_x)));
    scrollbar_content_height = (S.scrollbar_content_height = (scrollbar_y_height * (1 - scale_y)));


    (scroll_left_lines > 0)
    &&
    (
        left = (list.scrollLeft = (
            content_left + (scroll_left_lines * row_height)
        ))
    );

    (scroll_top_lines > 0)
    &&
    (
        top = (list.scrollTop  = (
            content_top + (scroll_top_lines * row_height)
        ))
    );

    scrollbar_thumb_x_style.transform =
        scrollbar_thumb_x_transform(
            (S.thumb_x_translate = (
                max_left
                ? ((scrollbar_content_width) * (left / max_left))
                : 0
            )),
            scale_x
        );

    scrollbar_thumb_y_style.transform =
        scrollbar_thumb_y_transform(
            (S.thumb_y_translate = (
                max_top
                ? ((scrollbar_content_height) * (top / max_top))
                : 0
            )),
            scale_y
        );
};