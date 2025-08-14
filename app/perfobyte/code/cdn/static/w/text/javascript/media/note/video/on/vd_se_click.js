import {perm_cm,start_v_o} from '../../../conf.js';
import {start} from "../../../logic/i.js";
import {perm_check,no_device} from '../../audio/i.js';
import {nt_vd_se} from '../../../elems.js';

import c from "../../c.js";



export default (
    (e) => {
        return(
            (c.L = c.nt_vd_l),
            (c.SE = nt_vd_se),
            (c.O = start_v_o),
            (c.TYPE = "videoinput"),
            
            navigator
            .permissions
            .query(perm_cm)
            .then(perm_check)
            .catch(no_device)
        );
    }
);
