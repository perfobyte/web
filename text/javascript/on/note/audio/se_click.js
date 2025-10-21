import {perm_mc,start_a_o} from '../../../conf/i.js';

import {anote_perm_check,anote_no_device} from '../../../f/i.js';

import {mc_se} from '../../../elems/i.js';
import {note} from "../../../state/i.js";

export default (
    (e) => {
        return(
            (note.L = note.au_l),
            (note.SE = mc_se),
            (note.O = start_a_o),
            (note.TYPE = "audioinput"),
            
            navigator
            .permissions
            .query(perm_mc)
            .then(anote_perm_check)
            .catch(anote_no_device)
        );
    }
);
