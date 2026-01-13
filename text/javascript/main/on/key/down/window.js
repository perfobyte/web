import {
    window_event_object,
    zoom_keys,
    x_move_event,
    y_move_event,
    
    fragment as fragment,

    edit_contexts,
    node_text,

    selection_groups,
    messages,
    clipboard,
    
} from '../../../conf/i.js';

import {
    state_style as S,
    state_alloc,
    state_app,
    state_mode,
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

    tokens,
    text_width_container,

    cursors,
    main,
    selection_blocks,
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

            key = e.key,

            window = e.currentTarget,
            document = window.document,

            active = document.activeElement,
            body = document.body
        ;

        e.preventDefault();
        e.stopPropagation();
        
        if (
            ctrl_key(e)
        ) {
            if (key === "Home") {
                scroll_y(
                    0,
                    S.scale_thumb_y,
                    S,
                    
                    list,
                    scrollbar_thumb_y_style,
    
                    scrollbar_thumb_y_transform,
                );
            }
            else if (key === "End") {
                scroll_y(
                    (S.height_scroll_content),
                    S.scale_thumb_y,
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

                    cursors,
                    selection_groups,
                    selection_blocks,

                    tokens,
                    0,
                    state_alloc.length_tokens,
                    
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
                );
            }
            else if (key === "c") {

                ((s) => {
                    var
                        value = s.string_value[state_mode.separator]
                    ;
                    clipboard.writeText(
                        value(
                            messages,
                            selection_groups,
                            selection_blocks,
                            tokens,
                            
                            s.i,
                            s.l,
    
                            (s.start),
                            (s.end),

                            state_app,
                        )
                    );

                })(
                    main.cursor.selection
                )
            }
        }
        else if (e.shiftKey) {
            
            if ((key === " ") || (key === "ArrowUp")) {
                scroll_y(
                    max(0, (list.scrollTop - S.height_list)),
                    S.scale_thumb_y,
                    S,
                    
                    list,
                    scrollbar_thumb_y_style,

                    scrollbar_thumb_y_transform,
                );
            }
            else if ((key === "PageUp") || (key === "ArrowLeft")) {
                scroll_x(
                    max(0, (list.scrollLeft - S.width_list)),
                    S.scale_thumb_x,
                    S,
                    
                    list,
                    scrollbar_thumb_x_style,

                    scrollbar_thumb_x_transform,
                );
            }
            else if ((key === "PageDown") || (key === "ArrowRight")) {
                scroll_x(
                    min(S.width_scroll_content, (list.scrollLeft + S.width_list)),
                    S.scale_thumb_x,
                    S,
                    
                    list,
                    scrollbar_thumb_x_style,

                    scrollbar_thumb_x_transform,
                );
            }
            else if (key === "ArrowDown") {
                scroll_y(
                    min(S.height_scroll_content, (list.scrollTop + S.height_list)),
                    S.scale_thumb_y,
                    S,
                    
                    list,
                    scrollbar_thumb_y_style,

                    scrollbar_thumb_y_transform,
                );
            }
            else if (key === "G") {
                scroll_y(
                    S.height_scroll_content,
                    S.scale_thumb_y,
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
                min(S.height_scroll_content, (list.scrollTop + S.height_list)),
                S.scale_thumb_y,
                S,
                
                list,
                scrollbar_thumb_y_style,

                scrollbar_thumb_y_transform,
            );
        }
        else if (key === "PageUp") {
            scroll_y(
                max(0, (list.scrollTop - S.height_list)),
                S.scale_thumb_y,
                S,
                
                list,
                scrollbar_thumb_y_style,

                scrollbar_thumb_y_transform,
            );
        }
        else if ((key === "ArrowUp") || (key === "k")) {
            scroll_y(
                max(0, (list.scrollTop - S.height_row)),
                S.scale_thumb_y,
                S,
                
                list,
                scrollbar_thumb_y_style,

                scrollbar_thumb_y_transform,
            );
        }
        else if ((key === "ArrowDown") || (key === "j")) {
            scroll_y(
                min(S.height_scroll_content, (list.scrollTop + S.height_row)),
                S.scale_thumb_y,
                S,
                
                list,
                scrollbar_thumb_y_style,

                scrollbar_thumb_y_transform,
            );
        }
        else if ((key === "ArrowLeft") || (key === "h")) {
            scroll_x(
                max(0, (list.scrollLeft - S.width_symbol)),
                S.scale_thumb_x,
                S,
                
                list,
                scrollbar_thumb_x_style,

                scrollbar_thumb_x_transform,
            );
        }
        else if ((key === "ArrowRight") || (key === "l")) {
            scroll_x(
                min(S.width_scroll_content, (list.scrollLeft + S.width_symbol)),
                S.scale_thumb_x,
                S,
                
                list,
                scrollbar_thumb_x_style,

                scrollbar_thumb_x_transform,
            );
        }
        else if (key === "Home") {
            scroll_x(
                0,
                S.scale_thumb_x,
                S,
                
                list,
                scrollbar_thumb_x_style,

                scrollbar_thumb_x_transform,
            );
        }
        else if (key === "End") {
            scroll_x(
                (S.width_scroll_content),
                S.scale_thumb_x,
                S,
                
                list,
                scrollbar_thumb_x_style,

                scrollbar_thumb_x_transform,
            );
        }
        else if (
            (key === "g")
            &&
            (state_app.last_key === "g")
        ) {
            scroll_y(
                0,
                S.scale_thumb_y,
                S,
                
                list,
                scrollbar_thumb_y_style,

                scrollbar_thumb_y_transform,
            );
        }
        else if (active === body) {
            if (key === "Tab") {
                main.input.element.focus();
            }
        }
        else {
            if (key === "Escape") {
                main.input.element.blur();
            }
        }
        
        state_app.last_key = key;
    }
);
