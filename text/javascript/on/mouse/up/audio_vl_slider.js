import {on_audio_vl_slider_mousemove} from '../move/i.js'
import {on_audio_vl_slider_mouseup} from './i.js';

export default (
    (e) => {
        var window = e.currentTarget;
        return (
            window.removeEventListener('mousemove', on_audio_vl_slider_mousemove),
            window.removeEventListener("mouseup", on_audio_vl_slider_mouseup)
        )
    }
);
