import O from '../state/O.js';
import {sn} from '../elems.js';


export default (
    (e) => {
        var v = sn.value;
        return (
            v
            ? localStorage.setItem("0", (O.n = v))
            : (sn.value = O.n)
        );
    }
);
