import {ch,vdcf,} from '../../conf.js';
import {camera_cl,V,} from "../../elems.js";
import C from "../../cache.js";
import ts from "../../ts.js";

import {write,update_ts,push} from '../../logic/i.js';

export default (
    (e) => {
        var rd = C.rd;
        return (
            (rd === null)
            ? (
                (ch.a = []),
                (C.paused = false),
                camera_cl.remove("p"),
                (
                    (
                        rd =
                            new MediaRecorder(
                                V.srcObject,
                                vdcf
                            )
                    )
                    .ondataavailable = push
                ),
                (rd.onstop = write),
                camera_cl.add("f"),
                
                (ts[0] = 0),
                (ts[1] = setInterval(update_ts, 1000)),

                (C.rd = rd)
                .start()
            )
            : rd.stop()
        );
    }
);
