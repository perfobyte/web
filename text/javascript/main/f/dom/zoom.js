import {style_state} from '../../state/i.js';
import {
    list,
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    html_style,
} from '../../elems/i.js';
import {
    number_clamp,
    on_window_resize,
    set_scroll,
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
    set_list_scroll_x,
    set_list_scroll_y,

} from '../../f/i.js';
import {window_event_object} from '../../conf/i.js';


export default (
    (zoom_key_index, new_zoom) => {
        var
            var_number_2 = 0,
            var_number_3 = 0,
            var_number_4 = 0,
            min = Math.min,
            max = Math.max
        ;
        
        return (
            (var_number_2 = (list.scrollLeft / list.scrollWidth)),
            (var_number_3 = (list.scrollTop / list.scrollHeight)),

            (style_state.zoom_prev = var_number_4 = style_state.zoom),

            on_custom_zoom(
                style_state,
                new_zoom,
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
                                        zoom_key_index =
                                            style_state
                                            .list_width
                                    )
                                ),
                                0,
                                (
                                    zoom_key_index
                                    * (1 - (zoom_key_index = style_state.thumb_x_scale))
                                ),
                                min,
                                max,
                            )
                        )
                    ),
                    zoom_key_index,
                ),
                set_list_scroll_x,
                list,
                number_clamp(
                    (var_number_2 * (zoom_key_index = list.scrollWidth)),
                    0,
                    (zoom_key_index - list.offsetWidth),
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
                                    * (zoom_key_index = window.innerHeight)
                                ),
                                0,
                                (
                                    zoom_key_index
                                    * (1 - (zoom_key_index = style_state.thumb_y_scale))
                                ),
                                min,
                                max,
                            )
                        )
                    ),
                    zoom_key_index
                ),
                set_list_scroll_y,
                list,
                number_clamp(
                    (var_number_3 * (zoom_key_index = list.scrollHeight)),
                    0,
                    (zoom_key_index - list.offsetHeight),
                    min,
                    max,
                ),
            )
        )
    }
);
