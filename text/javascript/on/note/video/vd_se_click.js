import {perm_cm,start_v_o} from '../../../conf.js';

import {anote_perm_check,anote_no_device} from '../../../f/i.js';
import {nt_vd_se} from '../../../elems.js';
import {note} from "../../../state/i.js";

export default (
    (e) => {
        return(
            (note.L = note.nt_vd_l),
            (note.SE = nt_vd_se),
            (note.O = start_v_o),
            (note.TYPE = "videoinput"),
            
            navigator
            .permissions
            .query(perm_cm)
            .then(anote_perm_check)
            .catch(anote_no_device)
        );
    }
);
