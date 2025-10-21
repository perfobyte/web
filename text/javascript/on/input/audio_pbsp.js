import {
    API_2,
    
    AUDIO_SPEED_MAX,
    AUDIO_SPEED_MIN,

    AUDIO_MDOWN_TO,
    AUDIO_MDOWN_FROM,
    AUDIO_MDOWN_VALUE,
    

} from '../../conf/i.js';
import {audio_pbsp_sl} from '../../elems/i.js';


export default (
    (e) => {
        var
            t = e.currentTarget,
            V = t.value,
            v = 0
        ;
        return (
            (V === "")
            ? (t.value = API_2.playbackRate)
            :
            (
                (
                    audio_pbsp_sl.transform = `scaleX(${
                        (
                            (
                                v = (
                                    Math.max(
                                        AUDIO_SPEED_MIN,
                                    Math.min(
                                        AUDIO_SPEED_MAX,
                                        (Number(V) || 1)
                                    )
                                    )
                                )
                            ) >= AUDIO_MDOWN_TO
                        )
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
                (API_2.playbackRate = v)
            ),
            undefined
        )
    }
);
