import {on_audio_vl_slider_mousemove} from '../move/i.js'
import {on_audio_vl_slider_mouseup} from '../up/i.js';

export default (
    (e) => {
        var
            t = e.currentTarget,
            window = t.ownerDocument.defaultView,
            audio_vl = t.closest(".vl")
        ;
        return (
            window.addEventListener('mousemove', on_audio_vl_slider_mousemove),
            window.addEventListener("mouseup", on_audio_vl_slider_mouseup),
            (
                audio_vl.onmouseenter =
                audio_vl.onmouseleave =
                    null
            ),

            on_audio_vl_slider_mousemove(e)
        )
    }
);
