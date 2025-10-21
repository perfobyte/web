import {
    AUDIO_DECINC_STEP,
    API_2,
    
    AUDIO_SPEED_MIN,
    AUDIO_SPEED_MAX,
    
    AUDIO_MDOWN_FROM,
    AUDIO_MDOWN_TO,
    AUDIO_MDOWN_VALUE,

} from '../../../../conf/i.js';
import {audio_pbsp_value} from '../../../../f/i.js';
import {audio_pbsp_sl} from '../../../../elems/i.js';


export default (
    (e) => {
        var
            t = e.currentTarget,
            v = (
                audio_pbsp_value(
                    Math.min(
                        AUDIO_SPEED_MAX,
                    Math.max(
                        AUDIO_SPEED_MIN,
                        (API_2.playbackRate + (AUDIO_DECINC_STEP * Number(t.getAttribute("data-a"))))
                    )
                    )
                )
            )
        ;
        
        return (
            (
                audio_pbsp_sl.transform = `scaleX(${
                    (v >= AUDIO_MDOWN_TO)
                    ? 1
                    :
                    (v <= AUDIO_MDOWN_FROM)
                    ? 0
                    : (
                        (v-AUDIO_MDOWN_FROM)
                        /
                        AUDIO_MDOWN_VALUE
                    )
                })`
            ),

            (API_2.playbackRate = v),
            undefined
        );
    }
);
