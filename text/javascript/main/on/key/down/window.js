import {
    window_event_object,
    zoom_keys,
    x_move_event,
    y_move_event,
    
    messages_fragment as fragment,
} from '../../../conf/i.js';

import {
    style_state as S,
    alloc_state,
    app_state,
} from '../../../state/i.js';
import {
    number_clamp,
    ctrl_key,
    
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,

    zoom,
    template_clone,

    scroll_x,
    scroll_y,

    init_cursors,
} from '../../../f/i.js';
import {
    html_style,
    list,
    
    scrollbar_x,
    scrollbar_y,

    scrollbar_thumb_x,
    scrollbar_thumb_y,

    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,

    elements,
    text_width_container,

    cursor_elems,
} from '../../../elems/i.js';
import {on_window_resize} from "../../resize/i.js";

import {
    on_scrollbar_thumb_mousemove,

    on_thumb_mousemove_x,
    on_thumb_mousemove_y,
} from '../../mouse/i.js';

export default (
    (e) => {
        var
            zoom_key_index = 0,

            min = Math.min,
            max = Math.max,

            key = e.key
        ;

        e.preventDefault();
        e.stopPropagation();
        
        
        if (
            ctrl_key(e)
        ) {
            if (key === "Home") {
                scroll_y(
                    0,
                    S.thumb_y_scale,
                    S,
                    
                    list,
                    scrollbar_thumb_y_style,
    
                    scrollbar_thumb_y_transform,
                );
            }
            else if (key === "End") {
                scroll_y(
                    (S.scroll_content_height),
                    S.thumb_y_scale,
                    S,
                    
                    list,
                    scrollbar_thumb_y_style,
    
                    scrollbar_thumb_y_transform,
                );
            }
            else if (
                (
                    zoom_key_index =
                        zoom_keys.indexOf(key)
                ) > -1
            ) {
                zoom(
                    (zoom_key_index < 4)
                    ? (
                        (zoom_key_index > 1)
                        ? (
                            (zoom_key_index === 2)
                            ? S.zoom_max
                            : S.zoom_min
                        )
                        :
                        number_clamp(
                            (
                                (zoom_key_index === 0)
                                ? ((S.zoom) + (S.zoom_step))
                                : ((S.zoom) - (S.zoom_step))
                            ),
                            S.zoom_min,
                            S.zoom_max,

                            min,
                            max,
                        )
                    )
                    : (S.zoom_default),

                    cursor_elems,

                    elements,
                    0,
                    alloc_state.length_loaded_elements,
                    
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
                );
            }
        }
        else if (e.shiftKey) {
            
            if ((key === " ") || (key === "ArrowUp")) {
                scroll_y(
                    max(0, (list.scrollTop - S.list_height)),
                    S.thumb_y_scale,
                    S,
                    
                    list,
                    scrollbar_thumb_y_style,

                    scrollbar_thumb_y_transform,
                );
            }
            else if ((key === "PageUp") || (key === "ArrowLeft")) {
                scroll_x(
                    max(0, (list.scrollLeft - S.list_width)),
                    S.thumb_x_scale,
                    S,
                    
                    list,
                    scrollbar_thumb_x_style,

                    scrollbar_thumb_x_transform,
                );
            }
            else if ((key === "PageDown") || (key === "ArrowRight")) {
                scroll_x(
                    min(S.scroll_content_width, (list.scrollLeft + S.list_width)),
                    S.thumb_x_scale,
                    S,
                    
                    list,
                    scrollbar_thumb_x_style,

                    scrollbar_thumb_x_transform,
                );
            }
            else if (key === "ArrowDown") {
                scroll_y(
                    min(S.scroll_content_height, (list.scrollTop + S.list_height)),
                    S.thumb_y_scale,
                    S,
                    
                    list,
                    scrollbar_thumb_y_style,

                    scrollbar_thumb_y_transform,
                );
            }
            else if (key === "G") {
                scroll_y(
                    S.scroll_content_height,
                    S.thumb_y_scale,
                    S,
                    
                    list,
                    scrollbar_thumb_y_style,
    
                    scrollbar_thumb_y_transform,
                );
            }
        }
        else if (
            (key === " ")
            ||
            (key === "PageDown")
        ) {
            scroll_y(
                min(S.scroll_content_height, (list.scrollTop + S.list_height)),
                S.thumb_y_scale,
                S,
                
                list,
                scrollbar_thumb_y_style,

                scrollbar_thumb_y_transform,
            );
        }
        else if (key === "PageUp") {
            scroll_y(
                max(0, (list.scrollTop - S.list_height)),
                S.thumb_y_scale,
                S,
                
                list,
                scrollbar_thumb_y_style,

                scrollbar_thumb_y_transform,
            );
        }
        else if ((key === "ArrowUp") || (key === "k")) {
            scroll_y(
                max(0, (list.scrollTop - S.row_height)),
                S.thumb_y_scale,
                S,
                
                list,
                scrollbar_thumb_y_style,

                scrollbar_thumb_y_transform,
            );
        }
        else if ((key === "ArrowDown") || (key === "j")) {
            scroll_y(
                min(S.scroll_content_height, (list.scrollTop + S.row_height)),
                S.thumb_y_scale,
                S,
                
                list,
                scrollbar_thumb_y_style,

                scrollbar_thumb_y_transform,
            );
        }
        else if ((key === "ArrowLeft") || (key === "h")) {
            scroll_x(
                max(0, (list.scrollLeft - S.symbol_width)),
                S.thumb_x_scale,
                S,
                
                list,
                scrollbar_thumb_x_style,

                scrollbar_thumb_x_transform,
            );
        }
        else if ((key === "ArrowRight") || (key === "l")) {
            scroll_x(
                min(S.scroll_content_width, (list.scrollLeft + S.symbol_width)),
                S.thumb_x_scale,
                S,
                
                list,
                scrollbar_thumb_x_style,

                scrollbar_thumb_x_transform,
            );
        }
        else if (key === "Home") {
            scroll_x(
                0,
                S.thumb_x_scale,
                S,
                
                list,
                scrollbar_thumb_x_style,

                scrollbar_thumb_x_transform,
            );
        }
        else if (key === "End") {
            scroll_x(
                (S.scroll_content_width),
                S.thumb_x_scale,
                S,
                
                list,
                scrollbar_thumb_x_style,

                scrollbar_thumb_x_transform,
            );
        }
        else if (
            (key === "g")
            &&
            (app_state.last_key === "g")
        ) {
            scroll_y(
                0,
                S.thumb_y_scale,
                S,
                
                list,
                scrollbar_thumb_y_style,

                scrollbar_thumb_y_transform,
            );
        }
        

        app_state.last_key = key;
    }
);
