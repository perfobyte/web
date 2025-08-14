import {start,fix_e,} from '../i.js';
import {only_a_o,mdi} from '../../../conf.js';
import c from "../../c.js";
import {mc_mup} from './i.js';

export default (
    (e) => (
        (c.s=true),
        window.addEventListener("mouseup",mc_mup),

        (mdi.exact = c.au),
        
        start(only_a_o)
        .catch(fix_e)
    )
)