import {on_audio_pline_mousemove, on_audio_pline_mouseup} from '../i.js';
import {API_2} from '../../../conf.js';
import {audio} from '../../../state/i.js';

export default (
    (e) => {
        var
            w = e.currentTarget
        ;
        return (
            w.removeEventListener("mousemove",on_audio_pline_mousemove),
            w.removeEventListener("mouseup",on_audio_pline_mouseup),

            (API_2.currentTime = audio[1])
        );
    }
);
