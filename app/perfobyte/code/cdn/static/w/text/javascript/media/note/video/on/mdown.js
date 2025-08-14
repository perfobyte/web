import {mdi,vdi,o, vd_o,vdcf, mimeType} from "../../../conf.js";
import {start,fix_e} from '../i.js';
import {nt_mup} from './i.js';
import c from '../../c.js';


export default (
    () => (
        (c.s=true),
        window.addEventListener("mouseup",nt_mup),
                
        (mdi.exact=c.nt_au),
        (vdi.exact=c.nt_vd),

        (vd_o.type = vdcf.mimeType = mimeType),

        start(o)
        .catch(fix_e)
    )
)