
import {mcin_t} from '../../../elems.js';
import {media_time} from '../../media/i.js';
import {note} from '../../../state/i.js';

export default (
    () => (
        mcin_t.textContent = media_time(++note.v)
    )
);
