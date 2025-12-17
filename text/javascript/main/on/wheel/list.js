import {on_scrollbar_thumb_mousemove} from '../mouse/i.js';
import {wheel_delta_value, ctrl_key, zoom, number_clamp} from '../../f/i.js';
import {style_state, mode_state} from '../../state/i.js';
import {
    xy_move_event,
} from '../../conf/i.js';

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
                    (delta = event.deltaY),
                    1
                )
            ),
            event_object = xy_move_event[direction],

            move = on_scrollbar_thumb_mousemove[direction],

            deltaMode = event.deltaMode,
            
            unit = (
                wheel_delta_value[direction][deltaMode](style_state)
            ),

            px = delta * unit
        ;
        
        return void (
            event.preventDefault(),

            ctrl_key(event)
            ? (
                zoom(number_clamp(
                    (
                        style_state.zoom * Math.exp(-px * style_state.sensitivity_wheel)
                    ),
                    style_state.zoom_min,
                    style_state.zoom_max,
                    Math.min,
                    Math.max,
                ))
            )
            : (
                (event_object[direction_key] = (px)),

                move(event_object)
            )
        );
    }
);
