import check from './check.js';
import stop from './stop.js';
import update_T from './update_T.js';

import {push,} from '../both/i.js';
import { stop as stop_track } from '../../media/i.js';

import {mcin_t,rl_cl} from '../../../elems.js';
import { AU_T, ch, fftSize, vd_o, vdcf } from '../../../conf.js';
import {note} from '../../../state/i.js';




export default (
    (s) => {
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
                        an =
                            (
                                note.c = ct = new window.AudioContext()
                            )
                            .createAnalyser()
                    )
                    .fftSize = fftSize
                ),

                (note.d = new Uint8Array(note.l = an.frequencyBinCount)),

                (note.o = ct.createMediaStreamSource(s))
                .connect(an),
                
                (r.ondataavailable=push),
                (r.onstop=stop),

                check(),
                
                (note.v=0),

                (mcin_t.textContent = "0:00"),
                
                (note.i=setInterval(update_T,1000)),

                rl_cl.add("f"),

                r.start()
            )
            : (
                s.getTracks().reduce(stop_track,s)
            )
        );
    }
);
