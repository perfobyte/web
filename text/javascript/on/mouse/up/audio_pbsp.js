import {API_2, AUDIO_MDOWN_FROM, AUDIO_MDOWN_VALUE} from '../../../conf/i.js';
import {on_audio_pbsp_mousemove, on_audio_pbsp_mouseup} from '../i.js'
import {audio_pbsp_v, audio_pbsp_sl} from '../../../elems/i.js';
import {audio_pbsp_value} from '../../../f/i.js';


export default (
    (e) => {
        var
            window = e.currentTarget,
            r = audio_pbsp_v.getBoundingClientRect()
        ;

        return (
            window.removeEventListener('mousemove', on_audio_pbsp_mousemove),
            window.removeEventListener("mouseup", on_audio_pbsp_mouseup),

            (
                API_2.playbackRate = 
                    audio_pbsp_value(
                        AUDIO_MDOWN_FROM
                        + (
                            AUDIO_MDOWN_VALUE
                            * Math.max(0, Math.min(1, ((e.clientX - r.left) / r.width)))
                        )
                    )
            ),

            null
        )
    }
);

