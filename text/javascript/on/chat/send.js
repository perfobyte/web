import {chat} from '../../state/i.js'
import {ctxt_i, html} from '../../elems/i.js';
import {count_char, msg_set} from '../../f/i.js';


export default (
    (e) => {
        var
            v = ctxt_i.innerText.trim(),
            n = null,

            rows = count_char(v,"\n",1, 0,v.length),

            t = 0
        ;
        return (
            v
            &&
            (
                (t = chat.t = Date.now()),

                (ctxt_i.innerText = ""),

                msg_set(v,(++chat.loaded),t)
            )
        )
    }
);
