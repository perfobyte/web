import {style_state, alloc_state, mode_state} from '../../state/i.js';
import {
    list,
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    html_style,

    elements,
    list_inner_style,
} from '../../elems/i.js';

import {
    on_window_resize_template,
} from '../../on/i.js';

import {
    number_clamp,
    set_scroll,
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
    set_list_scroll_x,
    set_list_scroll_y,

} from '../../f/i.js';
import {window_event_object} from '../../conf/i.js';


export default (new_zoom) => {
    var
        row_height = (style_state.row_height = style_state.row_height_default * new_zoom),
        i = alloc_state.offset_loaded_elements,
        l = alloc_state.length_loaded_elements,
        prev_zoom = style_state.zoom,
        ratio = new_zoom / prev_zoom,
        prev_left = list.scrollLeft,
        prev_top = list.scrollTop,
        loaded_height = 0,
        list_width = 0,
        list_height = 0,
        content_height = 0,
        content_width = 0,
        new_left = 0,
        new_top = 0,
        max_left = 0,
        max_top = 0
    ;

    while (i < l) {
      elements[i].style.top = `${loaded_height}px`;
      loaded_height += row_height;
      i++;
    }
  
    style_state.zoom = new_zoom;
    style_state.loaded_height = loaded_height;
  
    html_style.setProperty("--row-height", `${row_height}px`);
    html_style.setProperty(
        "--font-size",
        `${
            style_state.font_size = (
                style_state.font_size_default
                * new_zoom
            )
        }px`
    );
    
    style_state.extra_scroll_height = (
        (list_height = style_state.list_height)
        - (row_height - style_state.list_top)
    );
    
    list_inner_style.height = `${
        content_height = (
            style_state.content_height = (
                loaded_height
                + style_state.extra_scroll_height
            )
        )
    }px`;
  
    if (mode_state.row_width === 0) {
        content_width = (
            style_state.content_width = (
                (
                    style_state.loaded_width
                    * new_zoom
                )
                + style_state.extra_scroll_width
            )
        );
        list_inner_style.width = `${content_width}px`;
    }
    else {
        content_width = style_state.content_width;
    }
    
    style_state.thumb_x_scale = Math.min(1, (list_width  = style_state.list_width)  / content_width);
    style_state.thumb_y_scale = Math.min(1, list_height / content_height);
  
    new_left = prev_left * ratio;
    new_top  = prev_top  * ratio;
  
    max_left = Math.max(0, content_width  - list_width);
    max_top  = Math.max(0, content_height - list_height);
  
    (new_left > max_left) && (new_left = max_left);
    (new_top  > max_top) && (new_top = max_top);
  
    list.scrollLeft = new_left;
    list.scrollTop  = new_top;
  
    style_state.thumb_x_translate = (
        (content_width)
        ? ((new_left / content_width) * (style_state.thumb_x_size))
        : 0
    );

    style_state.thumb_y_translate = (
        (content_height)
        ? (new_top  / content_height) * (style_state.thumb_y_size)
        : 0
    );
  
    scrollbar_thumb_x_style.transform =
        scrollbar_thumb_x_transform(
            style_state.thumb_x_translate,
            style_state.thumb_x_scale
        );

    scrollbar_thumb_y_style.transform = 
        scrollbar_thumb_y_transform(
            style_state.thumb_y_translate,
            style_state.thumb_y_scale
        );
};