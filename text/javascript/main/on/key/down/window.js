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
    
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,

    zoom,
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
} from '../../../elems/i.js';
import {on_window_resize} from "../../resize/i.js";

import {on_scrollbar_thumb_mousemove} from '../../mouse/i.js';

export default (
    (e) => {
        var
            zoom_key_index = 0,

            min = Math.min,
            max = Math.max,

            key = e.key
        ;
        return (
            (
                ctrl_key(e)
                &&
                (
                    (
                        zoom_key_index =
                            zoom_keys.indexOf(key)
                    ) > -1
                )
            )
            &&
            (
                e.preventDefault(),
                e.stopPropagation(),
                
                zoom(
                    (zoom_key_index < 2)
                    ? (
                        number_clamp(
                            (
                                (zoom_key_index === 0)
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
            )
        );
    }
);
