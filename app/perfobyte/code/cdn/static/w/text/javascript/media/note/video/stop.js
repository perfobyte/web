import c from '../c.js';
import {stop} from '../../f/i.js';
import {ch,vd_o} from '../../conf.js';
import {ntin_bl,ntin_V} from '../../elems.js';


export default (
    () => {
        var
            u = "",

            r = c.r,
            s = ntin_V.srcObject,

            cha = ch.a
        ;
        return(
            clearInterval(c.i),

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
                c.r =
                r.onstop =
                r.ondataavailable = null
            )
        );
    }
);
