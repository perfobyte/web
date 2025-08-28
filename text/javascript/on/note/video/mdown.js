import {mdi,vdi,o, vd_o,vdcf, mimeType} from "../../../conf.js";
import {vnote_start,vnote_fix_e} from '../../../f/i.js';

import nt_mup from './mup.js';
import {note} from '../../../state/i.js';


export default (
    () => (
        (note.s=true),
        window.addEventListener("mouseup",nt_mup),
                
        (mdi.exact=note.nt_au),
        (vdi.exact=note.nt_vd),

        (vd_o.type = vdcf.mimeType = mimeType),

        vnote_start(o)
        .catch(vnote_fix_e)
    )
)