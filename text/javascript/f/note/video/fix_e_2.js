
import start from './start.js';

import {nt_mup} from "../../../on/i.js";
import {mdi,vdi, start_v_o, vd_o, vdcf, videoType} from '../../../conf/i.js';

export default (
    (e) => (
        (vd_o.type = vdcf.mimeType = videoType),
        
        start(start_v_o)
        .catch((e) => (console.error(e),nt_mup(e)))
    )
);
