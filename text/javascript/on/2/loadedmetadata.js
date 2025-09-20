import {audio_ts_2} from '../../elems.js';
import {audio_time} from '../../f/i.js';


export default (
    (e) => {
        return (audio_ts_2.textContent = audio_time(e.currentTarget.duration));
    }
);
