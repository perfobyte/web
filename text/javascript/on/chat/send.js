import {chat} from '../../state/i.js'
import {ctxt_i, rl, html} from '../../elems.js';
import {count_char, update_height} from '../../f/i.js';
import {msg_set} from '../../render/i.js';


// TODO:
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

                msg_set(v,(++chat.loaded),t),

                update_height(1),
                (html.scrollTop = html.scrollHeight)
            )
        )
    }
);
