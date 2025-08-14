
import {call,call_display} from '../../../state/i.js';
import {stop, removeTrack, accept_track} from '../../../media/f/i.js';
import {only_a_o, only_v_o, mdi, vdi} from '../../../media/conf.js';
import {cl_dlist_ul} from '../../../elems.js';


import {stream_to_peer} from '../../i.js';

import {change_device_then} from '../../i.js';



export default (
    (e) => {
        var
            t = e.currentTarget,
            id = t.getAttribute("data-i"),
            
            is_vd = (cl_dlist_ul.getAttribute("data-t")[0] === 'v')
        ;
        
        return (
            call_display.v
            ? (
                is_vd
                ? (
                    cl_dlist_ul.querySelector(`button[data-i="${call.D1}"]`).classList.remove("s"),
                    (call.D1 = id)
                )
                : (
                    cl_dlist_ul.querySelector(`button[data-i="${call.D0}"]`).classList.remove("s"),
                    (call.D0 = id)
                ),

                t.classList.add("s")
            )
            :
            navigator
            .mediaDevices
            .getUserMedia(
                (
                    call.op = (
                        is_vd
                        ? (
                            cl_dlist_ul.querySelector(`button[data-i="${call.D1}"]`).classList.remove("s"), 
                            true
                        )
                        : (
                            cl_dlist_ul.querySelector(`button[data-i="${call.D0}"]`).classList.remove("s"),
                            false
                        )
                    )
                )
                ? (
                    (
                        call.D1 =
                        vdi.exact =
                            id
                    ),
                    only_v_o
                )
                : (
                    (
                        call.D0 =
                        mdi.exact =
                            id
                    ),
                    only_a_o
                )
            )
            .then(
                change_device_then
            )
        );
        
    }
);

