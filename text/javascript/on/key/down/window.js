import {window_event_object} from '../../../conf/i.js';
import {style_state} from '../../../state/i.js';
import {number_clamp} from '../../../f/i.js';
import {html_style, document} from '../../../elems/i.js';
import {on_window_resize} from "../../resize/i.js";
import {on_custom_zoom} from '../../custom/i.js';

export default (
    (
        platform,
        window_event_object,
        state,
        style,
        number_clamp,
        list,
        on_zoom,
    ) => {
        var
            zoom_keys = [
                187, // = / +
                107, // numpad +
                189, // -
                109, // numpad -
                48,  // 0
                96,  // numpad 0
            ],

            ctrl_key = (
                platform.startsWith("Mac")
                ? (
                    ((e)=>(e.metaKey))
                )
                : (
                    ((e)=>(e.ctrlKey))
                )
            )
        ;
        return (e) => {
            var
                var_1 = 0
            ;
            return (
                (
                    ctrl_key(e)
                    &&
                    (
                        (
                            var_1 = zoom_keys.indexOf(e.keyCode)
                        ) > -1
                    )
                )
                &&
                (
                    e.preventDefault(),
                    e.stopPropagation(),

                    on_zoom(state, var_1, style, number_clamp, list),
                    on_window_resize(window_event_object)
                )
            );
        }
    }
)(
    navigator.platform,
    window_event_object,
    style_state,
    html_style,
    number_clamp,
    list,
    on_custom_zoom,
);
