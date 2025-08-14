import c from '../c.js';
import {ch,fftSize,vd_o,vdcf} from '../../conf.js';
import { AU_T } from '../conf.js';
import {check,update_T,stop} from './i.js';

import {mcin_t,rl_cl} from '../../elems.js';

import {push,} from '../../logic/i.js';
import { stop as stop_track } from '../../f/i.js';



export default (
    (s) => {
        var
            an = null,
            ct = null,
            r = null
        ;
        return (
            c.s
            ? (
                (vdcf.mimeType = vd_o.type = AU_T),
                
                (c.r = r = new MediaRecorder(s,vdcf)),
                
                (ch.a=[]),
                
                (
                    (
                        c.a =
                        an =
                            (
                                c.c = ct = new window.AudioContext()
                            )
                            .createAnalyser()
                    )
                    .fftSize = fftSize
                ),

                (c.d = new Uint8Array(c.l = an.frequencyBinCount)),

                (c.o = ct.createMediaStreamSource(s))
                .connect(an),
                
                (r.ondataavailable=push),
                (r.onstop=stop),

                check(),
                
                (c.v=0),

                (mcin_t.textContent = "0:00"),
                
                (c.i=setInterval(update_T,1000)),

                rl_cl.add("f"),

                r.start()
            )
            : (
                s.getTracks().reduce(stop_track,s)
            )
        );
    }
);
