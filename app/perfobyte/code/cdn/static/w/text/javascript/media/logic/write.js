import C from '../cache.js';
import {camera_cl,V,camera,} from '../elems.js';
import ts from '../ts.js';

import {fix, pause, play} from './i.js';
import {ch,vd_o} from '../conf.js';

export default (
    () => {
        var rd = C.rd;
        return (
            camera_cl.add("c"),
            camera_cl.remove("f"),

            (
                C.rd =
                rd.onstop =
                rd.ondataavailable = null
            ),

            clearInterval(ts[1]),

            (C.stream = V.srcObject),
            (V.srcObject = null),

            
            camera.addEventListener("click",fix),
            V.addEventListener("pause",pause),
            V.addEventListener("play",play),

            pause(),
            
            (V.src = URL.createObjectURL(new Blob(ch.a, vd_o))),
            V.pause()
        );
    }
);
