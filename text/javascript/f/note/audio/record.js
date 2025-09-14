import check from './check.js';
import stop from './stop.js';
import update_T from './update_T.js';

import {push,} from '../both/i.js';
import { stop as stop_track } from '../../media/i.js';

import {mcin_t,rl_cl, mcin_b_s,ntin_ts_b_s} from '../../../elems.js';
import { AU_T, ch, fftSize, vd_o, vdcf } from '../../../conf.js';
import {note} from '../../../state/i.js';

export default (
    (check) => (s) => {
        var
            an = null,
            ct = null,
            r = null
        ;
        return (
            note.s
            ? (
                (vdcf.mimeType = vd_o.type = AU_T),
                (note.r = r = new MediaRecorder(s,vdcf)),
                (ch.a=[]),
                
                (
                    (
                        note.a =
                        an = (
                            (
                                note.c = ct = new (globalThis.AudioContext)()
                            )
                            .createAnalyser()
                        )
                    )
                    .fftSize = fftSize
                ),
                (note.d = new Uint8Array(note.l = an.frequencyBinCount)),
                (note.o = ct.createMediaStreamSource(s))
                .connect(an),
                
                (r.ondataavailable=push),
                (r.onstop=stop),

                (note.v=0),
                (mcin_t.textContent = "0:00"),
                
                (note.i=setInterval(update_T,1000)),
                
                r.start(),
                check(),

                rl_cl.add("f")
            )
            : (
                s.getTracks().reduce(stop_track,s)
            )
        );
    }
)(
    check(mcin_b_s)
);
