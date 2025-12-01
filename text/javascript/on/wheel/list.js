import {on_scrollbar_thumb_mousemove} from '../mouse/i.js';
import {wheel_delta_value} from '../../f/i.js';
import {style_state} from '../../state/i.js';
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
            
            unit = wheel_delta_value[direction][event.deltaMode](style_state)
        ;
        return void (
            (event_object[direction_key] = (delta * unit)),

            move(event_object),
            event.preventDefault()
        );
    }
);
