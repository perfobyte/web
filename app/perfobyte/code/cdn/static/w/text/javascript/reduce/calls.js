import {cbr, call_icons, call_ul} from '../elems.js';
import {call_set} from '../set/i.js'


export default (
    (r,call, i) => (
        call_ul.appendChild(call_set(cbr.cloneNode(true),r.chats[call.c],call,call_icons,r.now)),
        r
    )
);
