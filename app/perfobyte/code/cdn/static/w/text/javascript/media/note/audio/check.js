import c from '../c.js';
import {mcin_b_s} from '../../elems.js';
import {sm} from '../../f/i.js';
import {fftSize} from '../../conf.js';
import {check} from './i.js';



export default (
    () => {
        var d = null;
        return c.s && (
            c.a.getByteFrequencyData(d = c.d),

            (mcin_b_s.transform=`scale(${1.0 + ((d.reduce(sm,0) / c.l) / fftSize)})`),
            
            requestAnimationFrame(check)
        );
    }
);