import {MSG_EL,MT_EL, msgs_list, msgs_time_ul} from '../elems/i.js';
import {msg_v_el, msg_el, mt_v_el} from '../f/i.js';


export default (
    {
        i: -1,
        msgs: new Map(), // TODO:

        t: 0,
        
        last_t: 0,
        loaded: 0,

        v: "",
        tv: "",

        ul:msgs_list,
        time_ul:msgs_time_ul,

        MSG_EL,
        MT_EL,
        msg_v_el,
        msg_el,
        mt_v_el,
    }
);
