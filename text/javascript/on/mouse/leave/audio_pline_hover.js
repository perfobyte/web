import {on_audio_pline_hover_mousemove, on_audio_pline_hover_mouseleave} from '../i.js';

export default (
    (e) => {
        var
            _ = e.currentTarget
        ;
        return (
            _.classList.remove("h"),
            _.removeEventListener("mousemove", on_audio_pline_hover_mousemove),
            _.removeEventListener("mouseleave", on_audio_pline_hover_mouseleave)
        )
    }
);
