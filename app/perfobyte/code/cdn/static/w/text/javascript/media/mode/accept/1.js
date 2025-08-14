import {canvas,V,camera_cl,camera,cm_ts,} from '../../elems.js';
import {ch} from '../../conf.js';
import {pause,play,fix} from '../../logic/i.js';

import C from "../../cache.js";

export default (
    (e) => {
        var
            u = V.src,

            a = document.createElement("a")
        ;
        return (
            (ch.a = null),
            camera.removeEventListener("click",fix),
            V.removeEventListener("pause",pause),
            V.removeEventListener("play",play),
            
            document.body.appendChild(a),
            (a.href = u),
            (a.download = "a.webm"),
            a.click(),
            a.remove(),
            
            (V.src = ""),
            URL.revokeObjectURL(u),
            (cm_ts.textContent = "0:00"),
            
            
            (V.srcObject = C.stream),
            V.play(),
            camera_cl.remove("c")
        )
    }
);
