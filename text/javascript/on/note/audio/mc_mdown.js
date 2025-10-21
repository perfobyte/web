import {only_a_o,mdi} from '../../../conf/i.js';
import {note} from "../../../state/i.js";

import mc_mup from './m_up.js';
import {anote_start,anote_fix_e,} from '../../../f/i.js';


export default (
    (e) => (
        (note.s=true),
        window.addEventListener("mouseup",mc_mup),

        (mdi.exact = note.au),
        
        anote_start(only_a_o)
        .catch(anote_fix_e)
    )
)