
// i = 0,
// l = state_alloc.length_loaded_elems,

export default (
    new_zoom,

    elems_cursor,

    elems,
    i,
    l,
    
    S,
    
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
    init_cursors,
    
    fragment,
    list,
    text_width_container,

    html_style,
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,

    node_text,
) => {
    var
        max = Math.max,
        min = Math.min,

        width_list = S.width_list,
        height_list = S.height_list,

        top_content = S.top_content,
        left_content = S.left_content,

        height_content = top_content,
        width_content = left_content,

        left = list.scrollLeft,
        top = list.scrollTop,

        prev_row_height = S.height_row,
        
        height_row = (S.height_row = S.height_row_default * new_zoom),

        px = 0,
        
        lines_x = S.lines_x,
        lines_y = S.lines_y,
        
        prev_zoom = S.zoom,
        
        bottom_content = (S.bottom_content = ((height_list) - (height_row))),

        font_size = (S.font_size = (S.font_size_default * new_zoom)),

        scale_x = 0,
        scale_y = 0,

        max_left = 0,
        max_top = 0,

        max_width = 0,

        element = null,
        inline = null,
        
        width_row = 0,

        node_i = 0,
        node_l = 0,

        nodes = null,
        
        thumb_x_width = 0,
        thumb_y_height = 0,

        width_scrollbar_x = S.width_scrollbar_x,
        height_scrollbar_y = S.height_scrollbar_y,

        width_scrollbar_content = 0,
        height_scrollbar_content = 0,

        e = null,
        
        e_left = 0
    ;
    
    html_style.setProperty("--height-row", `${height_row}px`);
    html_style.setProperty("--font-size", `${font_size}px`);
    
    for (;i < l; i++) {
        e = elems[i];

        element = e.element;
        inline = element.firstElementChild;

        text_width_container.className = (inline.className);

        nodes = inline.childNodes;
        node_i = 0;
        node_l = nodes.length;
        
        while (node_i < node_l) {
            fragment.appendChild(nodes[node_i++].cloneNode(true))
        };
        text_width_container.replaceChildren(fragment);
        
        
        px = (text_width_container.offsetWidth);

        e.width = px;
        
        
        max_width = max(max_width, px);

        // inline.style.width = `${px}px`;

        element.style.top = `${height_content}px`;

        if (e.position === 2) {
            e_left = left_content;
        }
        else {
            e_left += px;
        }

        e.bottom = (
            (e.top = height_content)
            + (e.height = text_width_container.offsetHeight)
        );
        e.right = ((e.left = e_left) + (px));
        
        height_content += height_row;
    };
    
    S.height_loaded_start = height_content;
    S.height_loaded = (height_content - top_content);
    S.height_content = (height_content += bottom_content);
    S.zoom = new_zoom;

    
    S.width_loaded_start = (left_content + (S.width_loaded = max_width));

    width_row = (S.width_row = (max_width + S.right_content));

    S.width_content = (width_content += (width_row));

    html_style.setProperty("--width-row", `${width_row}px`);

    html_style.setProperty("--height-content",`${height_content}px`);
    html_style.setProperty("--width-content",`${width_content}px`);

    max_left = (S.width_scroll_content = max(0,(width_content - width_list)));
    max_top = (S.height_scroll_content = max(0,(height_content - height_list)));

    scale_x = (S.scale_thumb_x = min(1, (width_list / width_content)));
    scale_y = (S.scale_thumb_y = min(1, (height_list / height_content)));

    width_scrollbar_content = (S.width_scrollbar_content = (width_scrollbar_x * (1 - scale_x)));
    height_scrollbar_content = (S.height_scrollbar_content = (height_scrollbar_y * (1 - scale_y)));


    (lines_y > 0)
    &&
    (
        left = (list.scrollLeft = (
            left_content + (lines_y * height_row)
        ))
    );

    (lines_x > 0)
    &&
    (
        top = (list.scrollTop = (
            top_content + (lines_x * height_row)
        ))
    );

    scrollbar_thumb_x_style.transform =
        scrollbar_thumb_x_transform(
            (S.translate_thumb_x = (
                max_left
                ? ((width_scrollbar_content) * (left / max_left))
                : 0
            )),
            scale_x
        );

    scrollbar_thumb_y_style.transform =
        scrollbar_thumb_y_transform(
            (S.translate_thumb_y = (
                max_top
                ? ((height_scrollbar_content) * (top / max_top))
                : 0
            )),
            scale_y
        );

    init_cursors(
        elems_cursor,
        elems,
        text_width_container,
        (S.width_cursor = (S.width_cursor_default * new_zoom)),
        node_text,
    )
};