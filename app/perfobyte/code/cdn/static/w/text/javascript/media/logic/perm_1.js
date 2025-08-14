import {current,only_v_o,mdi,vdcf, vd_o,o,start_o,perm_cm,videoType,start_v_o} from '../conf.js';
import perm_2 from './perm_2.js';
import O from '../../state/O.js';
import C from '../cache.js';


export default (
    (r) => {
        var s = r.state;
        return (
            (current.a = (
                (s === "denied")
                ? (
                    (
                        vdcf.mimeType =
                        vd_o.type =
                            videoType
                    ),
                    (C.o = only_v_o),
                    start_v_o
                )
                : (
                    (mdi.exact = O.md),
                    (C.o = o),
                    start_o
                )
            )),

            navigator
            .permissions
            .query(perm_cm)
            .then(perm_2)
        )
    }
);
