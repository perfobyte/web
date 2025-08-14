import c from '../c.js';
import { stop as stop_track } from '../../f/i.js';
import {push,} from '../../logic/i.js';

import {ch,vdcf} from '../../conf.js';

import {update_T,stop} from './i.js';

import {ntin_bl,ntin_ts,ntin_V} from '../../elems.js';


export default (
    (s) => {
        var
            r = null
        ;
        return (
            c.s
            ? (
                (c.r = r = new MediaRecorder(s,vdcf)),
                
                (ch.a=[]),
                
                (r.ondataavailable=push),
                (r.onstop=stop),

                (c.v=0),
                
                (ntin_ts.textContent = "0:00"),
                
                ntin_bl.add("a"),

                (c.i=setInterval(update_T,1000)),

                (ntin_V.srcObject = s),
                ntin_V.play(),

                r.start()
            )
            : (
                s.getTracks().reduce(stop_track,s)
            )
        );
    }
);
