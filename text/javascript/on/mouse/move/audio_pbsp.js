import {audio_pbsp_v, audio_pbsp_sl, audio_pbsp} from '../../../elems/i.js';
import {AUDIO_MDOWN_FROM, AUDIO_MDOWN_TO, AUDIO_MDOWN_VALUE,} from '../../../conf/i.js';
import {audio_pbsp_value} from '../../../f/i.js';


export default (
    (e) => {
        var
            r = audio_pbsp_v.getBoundingClientRect(),
            ar = Math.min(1,Math.max(0,((e.clientX - r.left) / r.width)))
        ;
        return (
            (
                audio_pbsp
                .value =
                    audio_pbsp_value(AUDIO_MDOWN_FROM+(AUDIO_MDOWN_VALUE*ar))
            ),
            (audio_pbsp_sl.transform = `scaleX(${ar})`)
        );
    }
);