import C from '../../cache.js';
import ts from '../../ts.js';
import {camera_cl,} from '../../elems.js';
import {update_ts} from '../../logic/i.js';

export default (
    () => {
        
        return (
            (C.paused=!(C.paused))
            ? (
                C.rd.pause(),
                clearInterval(ts[1]),
                camera_cl.add("p")
            )
            : (
                C.rd.resume(),
                (ts[1] = setInterval(update_ts, 1000)),
                camera_cl.remove("p")
            )
        );
    }
);
