
import { stop as stop_track } from '../../media/i.js';
import {push,} from '../both/i.js';
import {anote_check} from '../audio/i.js';

import {ch,vdcf, fftSize} from '../../../conf.js';

import stop from './stop.js';
import update_T from './update_T.js';

import {ntin_bl,ntin_ts,ntin_V, ntin_ts_b_s} from '../../../elems.js';
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
                (note.r = r = new MediaRecorder(s,vdcf)),
                (ch.a=[]),

                (
                    (
                        note.a =
                        an = (
                            (
                                note.c = ct = new window.AudioContext()
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
                (ntin_ts.textContent = "0:00"),
                
                (note.i=setInterval(update_T,1000)),

                (ntin_V.srcObject = s),
                ntin_V.play(),

                r.start(),
                check(),

                ntin_bl.add("a")
            )
            : (
                s.getTracks().reduce(stop_track,s)
            )
        );
    }
)(
    anote_check(ntin_ts_b_s)
);
