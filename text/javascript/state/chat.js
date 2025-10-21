import * as f from './chat_f/i.js';
import {msgs_ul, msgs_time_ul, MSG_EL, MT_EL} from "../elems/i.js";
import {msg_el, msg_v_el, mt_v_el} from '../f/i.js';

export default (
    Object.setPrototypeOf({
        i: -1,
        msgs: new Map(), // TODO:

        t: 0,

        sl: -1,
        last_t: 0,
        loaded: 0,

        v: "",
        tv: "",

        ul: msgs_ul,
        time_ul: msgs_time_ul,

        MSG_EL,
        MT_EL,

        msg_el,
        msg_v_el,
        mt_v_el,
    }, f)
);
