import {outpl_cl, ctxt_i} from '../../../../elems/i.js';
import {on_audio_write_blur} from '../../../blur/i.js';

export default (
    (e) => {
        return (
            ctxt_i.addEventListener("blur", on_audio_write_blur),
            outpl_cl.remove('a'),
            ctxt_i.focus()
        );
    }
);
