import {audio_ts_1, audio_pline_cursor, audio_pline_viewed, pline} from '../../elems/i.js';
import {audio_time} from '../../f/i.js';


export default (
    (e) => {
        var
            t = e.currentTarget,
            ct = t.currentTime,
            ar = (ct/t.duration)
        ;
        return (
            (audio_pline_viewed.transform = `scaleX(${ar})`),
            (audio_pline_cursor.transform = `translateX(${ar*pline.clientHeight}px)`),
            (audio_ts_1.textContent = audio_time(ct))
        );
    }
);
