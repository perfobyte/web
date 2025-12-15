import {style_state} from '../../state/i.js';
import {
    list,
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    html_style,
} from '../../elems/i.js';

import {
    on_window_resize,
    on_custom_zoom,
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


export default (
    (new_zoom) => {
        var
            size = 0,
            var_number_2 = 0,
            var_number_3 = 0,
            min = Math.min,
            max = Math.max
        ;
        return (
            (var_number_2 = (list.scrollLeft / list.scrollWidth)),
            (var_number_3 = (list.scrollTop / list.scrollHeight)),

            (style_state.zoom_prev = style_state.zoom),

            on_custom_zoom(
                style_state,
                (style_state.zoom = new_zoom),
                html_style,
                number_clamp,
                list,
            ),

            on_window_resize(window_event_object),

            set_scroll(
                scrollbar_thumb_x_style,
                scrollbar_thumb_x_transform(
                    (
                        style_state
                        .thumb_x_translate = (
                            number_clamp(
                                (
                                    var_number_2
                                    * (
                                        size =
                                            style_state
                                            .list_width
                                    )
                                ),
                                0,
                                (
                                    size
                                    * (1 - (size = style_state.thumb_x_scale))
                                ),
                                min,
                                max,
                            )
                        )
                    ),
                    size,
                ),
                set_list_scroll_x,
                list,
                number_clamp(
                    (var_number_2 * (size = list.scrollWidth)),
                    0,
                    (size - list.offsetWidth),
                    min,
                    max,
                ),
            ),
            
            set_scroll(
                scrollbar_thumb_y_style,
                scrollbar_thumb_y_transform(
                    (
                        style_state
                        .thumb_y_translate = (
                            number_clamp(
                                (
                                    var_number_3
                                    * (size = window.innerHeight)
                                ),
                                0,
                                (
                                    size
                                    * (1 - (size = style_state.thumb_y_scale))
                                ),
                                min,
                                max,
                            )
                        )
                    ),
                    size
                ),
                set_list_scroll_y,
                list,
                number_clamp(
                    (var_number_3 * (size = list.scrollHeight)),
                    0,
                    (size - list.offsetHeight),
                    min,
                    max,
                ),
            )
        )
    }
);
