import c from '../c.js';
import {stop} from '../../f/i.js';
import {ch,vd_o} from '../../conf.js';
import {rl_cl} from '../../elems.js';


export default (
    () => {
        var
            u = "",
            r = c.r,
            s = r.stream,

            ct = c.c,

            cha = ch.a
        ;
        return(
            clearInterval(c.i),

            c.a?.disconnect(),
            c.o?.disconnect(),
            ct && ((ct.state === "closed") || ct.close()),

            s&&s.getAudioTracks().reduce(stop,s),
            rl_cl.remove("f"),

            cha
            &&
            (cha.length>0)
            &&
            (
                URL.revokeObjectURL(
                    u = URL.createObjectURL(new Blob(cha, vd_o))
                )
            ),

            (
                ch.a =
                s =
                c.d =
                c.a =
                c.o =
                c.c =
                c.r =
                r.onstop =
                r.ondataavailable = null
            )
        );
    }
);
