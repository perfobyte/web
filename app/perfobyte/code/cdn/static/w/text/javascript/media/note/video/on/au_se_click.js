import {perm_mc,start_a_o} from '../../../conf.js';
import {start} from "../../../logic/i.js";
import {perm_check,no_device} from '../../audio/i.js';
import {nt_au_se} from '../../../elems.js';

import c from "../../c.js";



export default (
    (e) => {
        return(
            (c.L = c.nt_au_l),
            (c.SE = nt_au_se),
            (c.O = start_a_o),
            (c.TYPE = "audioinput"),
            
            navigator
            .permissions
            .query(perm_mc)
            .then(perm_check)
            .catch(no_device)
        );
    }
);
