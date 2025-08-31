import {chat} from '../../state/i.js'
import {ctxt, rl, html} from '../../elems.js';
import {count_char} from '../../f/i.js';
import {msg_set} from '../../render/i.js';


// TODO:
export default (
    (e) => {
        var
            v = ctxt.innerText.trim(),
            n = null,

            rows = count_char(v,"\n",1, 0,v.length),

            t = 0
        ;
        return (
            v
            &&
            (
                (t = chat.t = Date.now()),

                (
                    ctxt.innerText =
                    chat.v =
                    chat.tv = ""
                ),

                msg_set(v,(++chat.loaded),t),
                
                (html.scrollTop = html.scrollHeight)
            )
        )
    }
);
