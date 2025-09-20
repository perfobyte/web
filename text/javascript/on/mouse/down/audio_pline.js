import {on_audio_pline_mousemove, on_audio_pline_mouseup} from '../i.js';


export default (
    (e) => {
        var w = e.view;
        return (
            w.addEventListener("mousemove",on_audio_pline_mousemove),
            w.addEventListener("mouseup",on_audio_pline_mouseup),

            on_audio_pline_mousemove(e)
        );
    }
);
