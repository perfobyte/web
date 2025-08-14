import c from '../../c.js';
import {mc_mup} from './i.js';


export default (
    (e) => (
        window.removeEventListener("mouseup",mc_mup),
        
        (c.s=false),
        c.r?.stop()
    )
);
