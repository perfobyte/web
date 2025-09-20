import {on_audio_pline_hover_mousemove, on_audio_pline_hover_mouseleave} from '../i.js';


export default (
    (e) => {
        var _ = e.currentTarget;
        return (
            _.classList.add("h"),
            _.addEventListener("mousemove", on_audio_pline_hover_mousemove),
            _.addEventListener("mouseleave", on_audio_pline_hover_mouseleave)
        )
    }
);
