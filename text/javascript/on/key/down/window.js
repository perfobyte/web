import {window_event_object} from '../../../conf/i.js';


export default (
    (platform, window_event_object) => {
        var
            zoom_keys = [
                187, // = / +
                189, // -
                107, // numpad +
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
            return (
                (
                    ctrl_key(e)
                    &&
                    zoom_keys.includes(e.keyCode)
                )
                &&
                (
                    e.preventDefault(),
                    e.stopPropagation()

                    // e.currentTarget.dispatchEvent(window_event_object)
                )
            );
        }
    }
)(
    navigator.platform,
    window_event_object
)