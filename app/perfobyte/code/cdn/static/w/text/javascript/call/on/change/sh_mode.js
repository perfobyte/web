import {SH_EL_B} from '../../../SH_EL.js';
import {call_display} from '../../../state/i.js';

export default (
    (e) => {
        var
            t = e.currentTarget,
            m = call_display.m,
            new_m = t.getAttribute("data-i")
        ;
        return (
            SH_EL_B[m].remove("s"),

            SH_EL_B[call_display.m = Number(new_m)].add("s"),

            undefined
        );
    }
);
