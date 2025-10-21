import {
    AUDIO_MDOWN_FROM,
    AUDIO_MDOWN_TO,
    AUDIO_MDOWN_VALUE,
} from '../../conf/i.js';
import {audio_menu_spb_v, audio_pbsp, audio_pbsp_sl} from "../../elems/i.js";

export default (
    (e) => {
        var
            t = e.currentTarget,
            v = t.playbackRate
        ;
        
        return (
            console.log(v),
            (
                audio_pbsp.value =
                audio_menu_spb_v.textContent =
                    v
            )
        );
    }
);
