import {
    window_event_object,
    zoom_keys,
    x_move_event,
    y_move_event,
} from '../../../conf/i.js';
import {style_state} from '../../../state/i.js';
import {
    number_clamp,
    ctrl_key,
    recalculate_rows_top,

    set_list_scroll_x,
    set_list_scroll_y,

    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,

    set_scroll,
} from '../../../f/i.js';
import {
    html_style,
    list,
    document,

    scrollbar_x,
    scrollbar_y,

    scrollbar_thumb_x,
    scrollbar_thumb_y,

    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
} from '../../../elems/i.js';
import {on_window_resize} from "../../resize/i.js";
import {on_custom_zoom} from '../../custom/i.js';

import {on_scrollbar_thumb_mousemove} from '../../mouse/i.js';

export default (
    (e) => {
        var
            var_number_1 = 0,

            var_number_2 = 0,
            var_number_3 = 0,

            var_number_4 = 0,

            min = Math.min,
            max = Math.max,

            keyCode = e.keyCode,
            window = e.view
        ;
        return (
            (
                ctrl_key(e)
                &&
                (
                    (
                        var_number_1 =
                            zoom_keys.indexOf(keyCode)
                    ) > -1
                )
            )
            &&
            (
                e.preventDefault(),
                e.stopPropagation(),
                
                (var_number_2 = (list.scrollLeft / list.scrollWidth)),
                (var_number_3 = (list.scrollTop / list.scrollHeight)),

                on_custom_zoom(
                    style_state,
                    (
                        style_state.zoom = (
                            (var_number_1 < 4)
                            ? (
                                number_clamp(
                                    (
                                        (var_number_1 < 2)
                                        ? (
                                            (style_state.zoom)
                                            + (style_state.zoom_step)
                                        )
                                        : (
                                            (style_state.zoom)
                                            - (style_state.zoom_step)
                                        )
                                    ),
                                    style_state.zoom_min,
                                    style_state.zoom_max,
        
                                    min,
                                    max,
                                )
                            )
                            : (style_state.zoom_default)
                        )
                    ),
                    html_style,
                    number_clamp,
                    list,
                    recalculate_rows_top,
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
                                            var_number_1 =
                                                style_state
                                                .list_width
                                        )
                                    ),
                                    0,
                                    (
                                        var_number_1
                                        * (1 - (var_number_1 = style_state.thumb_x_scale))
                                    ),
                                    min,
                                    max,
                                )
                            )
                        ),
                        var_number_1,
                    ),
                    set_list_scroll_x,
                    list,
                    number_clamp(
                        (var_number_2 * (var_number_1 = list.scrollWidth)),
                        0,
                        (var_number_1 - list.offsetWidth),
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
                                        * (var_number_1 = window.innerHeight)
                                    ),
                                    0,
                                    (
                                        var_number_1
                                        * (1 - (var_number_1 = style_state.thumb_y_scale))
                                    ),
                                    min,
                                    max,
                                )
                            )
                        ),
                        var_number_1
                    ),
                    set_list_scroll_y,
                    list,
                    number_clamp(
                        (var_number_3 * (var_number_1 = list.scrollHeight)),
                        0,
                        (var_number_1 - list.offsetHeight),
                        min,
                        max,
                    ),
                )
            )
        );
    }
);
