import {on_audio_vl_slider_mousemove} from '../move/i.js'
import {on_audio_vl_slider_mouseup} from '../up/i.js';

export default (
    (e) => {
        var window = e.currentTarget.ownerDocument.defaultView;
        return (
            window.addEventListener('mousemove', on_audio_vl_slider_mousemove),
            window.addEventListener("mouseup", on_audio_vl_slider_mouseup),
            on_audio_vl_slider_mousemove(e)
        )
    }
);
