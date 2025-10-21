import {on_audio_vl_slider_mousemove} from '../move/i.js'
import {on_audio_vl_slider_mouseup} from './i.js';
import {audio_vl, outpl, audio_vl_cl} from '../../../elems/i.js';
import {on_audio_mouseenter, on_audio_mouseleave} from '../i.js';


export default (
    (e) => {
        var window = e.currentTarget;

        
        return (
            window.removeEventListener('mousemove', on_audio_vl_slider_mousemove),
            window.removeEventListener("mouseup", on_audio_vl_slider_mouseup),

            (audio_vl.onmouseenter = on_audio_mouseenter),
            (audio_vl.onmouseleave = on_audio_mouseleave),

            e.target.closest("#outpl")
            ||
            (
                audio_vl_cl.remove("_")
            ),

            null
        )
    }
);
