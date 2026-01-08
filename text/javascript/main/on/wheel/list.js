import {on_scrollbar_thumb_mousemove} from '../mouse/i.js';
import {
    wheel_delta_value,
    ctrl_key,
    zoom,
    number_clamp,

    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,

    template_clone,
    init_cursors,
} from '../../f/i.js';
import {state_style, state_mode, state_alloc} from '../../state/i.js';
import {
    xy_move_event,
    messages_fragment as fragment,
    node_text,
} from '../../conf/i.js';
import {
    tokens,
    list,
    text_width_container,

    html_style,
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    cursors,
} from '../../elems/i.js';

export default (
    (event) => {
        var
            delta = 0,
            direction_key = "",
            
            direction = (
                (event.shiftKey)
                ? (
                    (direction_key = "movementX"),
                    (delta = (event.deltaX || event.deltaY)),
                    0
                )
                : (
                    (direction_key = "movementY"),
                    (delta = (event.deltaY)),
                    1
                )
            ),
            event_object = null,

            unit = (
                wheel_delta_value[direction][event.deltaMode](state_style)
            ),

            px = (delta * unit)
        ;
        return void (
            event.preventDefault(),

            ctrl_key(event)
            ? (
                zoom(
                    number_clamp(
                        (
                            state_style.zoom * Math.exp((px) * (state_mode.wheel_sensitivity))
                        ),
                        state_style.zoom_min,
                        state_style.zoom_max,
                        Math.min,
                        Math.max,
                    ),
                    cursors,

                    tokens,
                    0,
                    state_alloc.length_loaded_elems,
                    
                    state_style,
                    
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
                )
            )
            : (
                ((event_object = xy_move_event[direction])[direction_key] = (px)),
                (on_scrollbar_thumb_mousemove[direction])(event_object)
            )
        );
    }
);
