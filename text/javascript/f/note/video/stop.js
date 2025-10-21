
import {note} from '../../../state/i.js';
import {stop} from '../../media/i.js';
import {ch,vd_o} from '../../../conf/i.js';
import {ntin_bl,ntin_V} from '../../../elems/i.js';


export default (
    () => {
        var
            u = "",

            r = note.r,
            s = ntin_V.srcObject,

            cha = ch.a
        ;
        return(
            clearInterval(note.i),

            s && s.getTracks().reduce(stop,s),
            
            ntin_bl.remove("a"),

            cha
            &&
            (cha.length>0)
            &&
            (
                alert(
                    u = URL.createObjectURL(new Blob(cha, vd_o))
                )
            ),

            (
                ntin_V.srcObject =
                ch.a =
                s =
                note.r =
                r.onstop =
                r.ondataavailable = null
            )
        );
    }
);
