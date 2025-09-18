import {API_2} from '../../../conf.js';
import {audio_vl_v} from '../../../elems.js';


export default (
    (e) => {
        var
            r = audio_vl_v.getBoundingClientRect()
        ;
        return (API_2.volume = Math.max(0, Math.min(1, ((e.clientX - r.left) / r.width))));
    }
);
