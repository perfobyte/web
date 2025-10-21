import {chat} from "../../../state/i.js";
import {remove_s_foreach} from '../../../f/i.js';
import {msg_menu_cl, msgs, msg_select} from '../../../elems/i.js';

export default (
    () => {
        var
            a = (
                (e) => {
                    var t = e.currentTarget;
                    
                    return (
                        (chat.sl = -1),

                        msgs.removeEventListener("scroll",a),
                        t.removeEventListener("click", a),
                        
                        document
                        .querySelectorAll("#msgs > .list > *.s")
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