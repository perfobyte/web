import {outpl_cl, ctxt_i} from '../../elems/i.js';
import {on_audio_write_blur} from './i.js';


export default (
    (e) => {
        return (
            ctxt_i.removeEventListener("blur", on_audio_write_blur),
            outpl_cl.add("a")
        )
    }
);
