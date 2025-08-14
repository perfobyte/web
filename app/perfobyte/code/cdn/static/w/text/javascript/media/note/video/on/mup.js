import c from '../../c.js';
import {nt_mup} from './i.js';


export default (
    (e) => (
        window.removeEventListener("mouseup",nt_mup),
        
        (c.s=false),
        c.r?.stop()
    )
);
