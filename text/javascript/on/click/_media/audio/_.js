import {audio} from '../../../../state/i.js';
import {API_2} from '../../../../conf.js';

export default (
    (e) => {
        var vl = API_2.volume;
        return (
            e.stopPropagation(),
            (vl === 0)
            ? (API_2.volume = audio[0])
            : (
                (audio[0] = vl),
                (API_2.volume = 0)
            ),
            undefined
        )
    }
);
