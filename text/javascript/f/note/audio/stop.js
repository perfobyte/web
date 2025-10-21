import {note} from '../../../state/i.js';
import {ch,vd_o} from '../../../conf/i.js';
import {rl_cl} from '../../../elems/i.js';
import {stop} from '../../media/i.js';


export default (
    () => {
        var
            u = "",
            r = note.r,
            s = r.stream,

            ct = note.c,

            cha = ch.a
        ;
        return(
            clearInterval(note.i),

            note.a?.disconnect(),
            note.o?.disconnect(),
            ct && ((ct.state === "closed") || ct.close()),

            s&&s.getAudioTracks().reduce(stop,s),
            rl_cl.remove("f"),
            
            cha
            &&
            (cha.length>0)
            &&
            (
                // URL.revokeObjectURL
                alert(
                    u = URL.createObjectURL(new Blob(cha, vd_o))
                )
            ),

            (
                ch.a =
                s =
                note.d =
                note.a =
                note.o =
                note.c =
                note.r =
                r.onstop =
                r.ondataavailable = null
            )
        );
    }
);
