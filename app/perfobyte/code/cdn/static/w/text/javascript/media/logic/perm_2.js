import {start_o,vdi,current} from '../conf.js';
import {start_dv,start} from './i.js';
import O from '../../state/O.js';


export default (
    (r) => {
        var
            s = r.state
        ;
        return (
            (s === "granted")
            ? (
                (vdi.exact = O.vd),

                navigator
                .mediaDevices
                .enumerateDevices()
                .then(start_dv)
            )
            :
            (s === "prompt")
            ? (
                navigator
                .mediaDevices
                .getUserMedia(current.a)
                .then(start)
                .then(start_dv)
            )
            : console.error("access denied")
        )
    }
);
