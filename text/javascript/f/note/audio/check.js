import {note} from '../../../state/i.js';
import {mcin_b_s} from '../../../elems.js';
import {sm} from '../../media/i.js';
import {fftSize} from '../../../conf.js';

export default (
    () => {
        var
            a = (
                () => {
                    var
                        d = null
                    ;
                    return (note.s) && (
                        note.a.getByteFrequencyData(d = note.d),

                        (mcin_b_s.transform=`scale(${1.0 + ((d.reduce(sm,0) / note.l) / fftSize)})`),
                        
                        requestAnimationFrame(a)
                    );
                }
            )
        ;
        return a;
    }
);