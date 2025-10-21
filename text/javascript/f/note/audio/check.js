import {note} from '../../../state/i.js';
import {mcin_b_s} from '../../../elems/i.js';
import {sm} from '../../media/i.js';
import {fftSize} from '../../../conf/i.js';

export default (
    (bg) => {
        var
            a = (
                () => {
                    var
                        d = null
                    ;
                    return (note.s) && (
                        note.a.getByteFrequencyData(d = note.d),

                        (
                            bg
                            .transform = (
                                `scale(${
                                    d.reduce(sm,0)
                                    / note.l
                                    / fftSize
                                    * 3
                                    + 1
                                })`
                            )
                        ),
                        
                        requestAnimationFrame(a)
                    );
                }
            )
        ;
        return a;
    }
);