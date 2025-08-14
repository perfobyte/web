import c from '../c.js';
import {mdi,vdi,start_v_o, vd_o, vdcf, videoType} from '../../conf.js';
import {start,fix_e_2} from './i.js';
import {nt_mup} from "./on/i.js";


export default (
    (e) => (
        console.dir(e),
        (vd_o.type = vdcf.mimeType = videoType),
        
        start(start_v_o)
        .catch((e) => (console.dir(e),nt_mup(e)))
    )
);
