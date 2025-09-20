import {pline, audio_pline_viewed, audio_pline_cursor, audio_ts_1} from "../../../elems.js";
import {API_2} from '../../../conf.js';
import {audio_time} from '../../../f/i.js';
import {audio} from '../../../state/i.js';

export default (
    (e) => {
        var
            r = pline.getBoundingClientRect(),
            h = r.width,
            ct = Math.min(h,Math.max(0, (e.clientX - r.left))),
            ar = (ct/h)
        ;
        return (
            (audio_pline_viewed.transform = `scaleX(${ar})`),
            (audio_pline_cursor.transform = `translateX(${ct}px)`),
            (audio_ts_1.textContent = audio_time(audio[1]=(ar*API_2.duration)))
        );
    }
);
