import * as f from './chat_f/i.js';
import {msgs_ul, msgs_time_ul, MSG_EL, MT_EL} from "../elems.js";
import {msg_el, msg_v_el, mt_v_el} from '../render/i.js';

export default (() => {
    function a() {
        this.i = -1;
        this.msgs = new Map(); // TODO:

        this.t = 0;

        this.sl = -1;
        this.last_t = 0;
        this.loaded = 0;

        this.v = "";
        this.tv = "";

        this.ul = msgs_ul;
        this.time_ul = msgs_time_ul;

        this.MSG_EL = MSG_EL;
        this.MT_EL = MT_EL;

        this.msg_el = msg_el;
        this.msg_v_el = msg_v_el;
        this.mt_v_el = mt_v_el;
    }
    a.prototype = f;
    return new a();
})();
