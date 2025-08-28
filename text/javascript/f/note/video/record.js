
import { stop as stop_track } from '../../media/i.js';
import {push,} from '../both/i.js';

import {ch,vdcf} from '../../../conf.js';

import stop from './stop.js';
import update_T from './update_T.js';

import {ntin_bl,ntin_ts,ntin_V} from '../../../elems.js';
import {note} from '../../../state/i.js';


export default (
    (s) => {
        var
            r = null
        ;
        return (
            note.s
            ? (
                (note.r = r = new MediaRecorder(s,vdcf)),
                
                (ch.a=[]),
                
                (r.ondataavailable=push),
                (r.onstop=stop),

                (note.v=0),
                
                (ntin_ts.textContent = "0:00"),
                
                ntin_bl.add("a"),

                (note.i=setInterval(update_T,1000)),

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
