import {msg_menu_st, msg_menu_cl, msg_select_st, msg_select_cl, body} from '../../elems/i.js';
import {chat, message} from "../../state/i.js";
import {on_after_msgs_ctx_click} from "../../on/i.js";
import {msg_height, } from '../../f/i.js';



export default (
    (e) => {
        var
            x = e.clientX,
            y = e.clientY,

            ID = "",

            target = e.target,
            li = target.closest(".msg"),

            i = 0,
            l = 0,

            r = null,
            sm = 0,

            found = null,
            first = null
        ;

        if (
            li
        ) {
            msg_menu_st.top = `${(li.getBoundingClientRect()).top}px`;
            
            msg_select_st.top = (
                (
                    r = (
                        (
                            first = (
                                found = (
                                    document
                                    .querySelectorAll(
                                        `#list > .msg[data-a="${
                                            ID = li.getAttribute("data-a")
                                        }"] > button`
                                    )
                                )
                            )[0]
                        )
                        .getBoundingClientRect()
                    )
                )
                .top
            )
            .toString()
            + "px";

            message.i = Number(ID);

            msg_menu_cl.add("a");

            msg_select_cl.remove("B");
            msg_select_cl.add("A");
            msg_select_cl.add("b");

            y = i = 0;
            l = found.length;
            
            for (;i<l;i++) {
                sm += (first = found[i]).clientHeight;
                ((x = first.clientWidth) > y) && (y = x);
            };

            msg_select_st.height = `${sm}px`;
            msg_select_st.width = `${y}px`;
            
            window.addEventListener("click",on_after_msgs_ctx_click);
            body.addEventListener("scroll",on_after_msgs_ctx_click);
        }

        return (
            e.preventDefault(),
            undefined
        )
    }
);
