


import {ntin_ts} from '../../../elems/i.js';
import {media_time} from '../../media/i.js';
import {note} from '../../../state/i.js';


export default (
    () => {
        return (
            (ntin_ts.textContent = media_time(++(note.v))),
            undefined
        )
    }
);
