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
import {style_state, mode_state, alloc_state} from '../../state/i.js';
import {
    xy_move_event,
    messages_fragment as fragment,
} from '../../conf/i.js';
import {
    elements,
    list,
    text_width_container,

    html_style,
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    cursor_elems,
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
                wheel_delta_value[direction][event.deltaMode](style_state)
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
                            style_state.zoom * Math.exp((px) * (mode_state.sensitivity_wheel))
                        ),
                        style_state.zoom_min,
                        style_state.zoom_max,
                        Math.min,
                        Math.max,
                    ),
                    cursor_elems,

                    elements,
                    0,
                    alloc_state.length_loaded_elements,
                    
                    style_state,
                    
                    scrollbar_thumb_x_transform,
                    scrollbar_thumb_y_transform,
                    init_cursors,

                    fragment,
                    list,
                    text_width_container,

                    html_style,
                    scrollbar_thumb_x_style,
                    scrollbar_thumb_y_style,
                )
            )
            : (
                ((event_object = xy_move_event[direction])[direction_key] = (px)),
                (on_scrollbar_thumb_mousemove[direction])(event_object)
            )
        );
    }
);
