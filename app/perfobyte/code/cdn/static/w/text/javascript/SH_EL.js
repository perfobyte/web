import {cl_dlist_li_create} from './create/i.js'
import {on_sh_mode_change}  from './call/i.js';
import {call_display} from './state/i.js';
import {firstElementClassList} from './dom/i.js';


export var
    SH_EL = (
        (a,m)=>(
            a[m].firstElementChild.classList.add('s'),
            a
        )
    )(
        [
            cl_dlist_li_create("Only audio", "0", on_sh_mode_change),
            cl_dlist_li_create("Only video", "1", on_sh_mode_change),
            cl_dlist_li_create("Both", "2", on_sh_mode_change),
        ],
        call_display.m
    ),

    SH_EL_B = Array.from(SH_EL, firstElementClassList)
;