import {on_audio_pbsp_mousemove, on_audio_pbsp_mouseup} from '../i.js'

export default (
    (e) => {
        var
            t = e.currentTarget,
            window = t.ownerDocument.defaultView,
            audio_vl = t.closest(".vl")
        ;
        return (
            window.addEventListener('mousemove', on_audio_pbsp_mousemove),
            window.addEventListener("mouseup", on_audio_pbsp_mouseup),

            on_audio_pbsp_mousemove(e)
        )
    }
);
