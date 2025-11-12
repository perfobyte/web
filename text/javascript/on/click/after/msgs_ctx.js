import {chat, message} from "../../../state/i.js";
import {remove_s_foreach} from '../../../f/i.js';
import {msg_menu_cl,  msg_select, body} from '../../../elems/i.js';

export default (
    () => {
        var
            a = (
                (e) => {
                    var t = e.currentTarget;
                    
                    return (
                        (message.i = -1),

                        body.removeEventListener("scroll",a),
                        t.removeEventListener("click", a),
                        
                        body
                        .querySelectorAll(".list > *.s")
                        .forEach(remove_s_foreach),

                        msg_menu_cl.remove("a"),
                        msg_select.classList.remove("b"),

                        undefined
                    );
                }
            )
        ;
        return a;
    }
)();