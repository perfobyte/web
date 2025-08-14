import {ce1,ce2,cm_sh_bt} from '../elems.js';
import {shoot,accept,decline } from '../mode/i.js';

export default (
    (m,p) => {
        return (
            cm_sh_bt.removeEventListener("click",shoot[p]),
            cm_sh_bt.addEventListener("click",shoot[m]),

            ce1.removeEventListener("click",accept[p]),
            ce1.addEventListener("click",accept[m]),

            ce2.removeEventListener("click",decline[p]),
            ce2.addEventListener("click",decline[m]),

            m
        );
    }
);
