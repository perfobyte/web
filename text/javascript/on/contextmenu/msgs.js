import {msg_menu_st, msg_menu_cl, msgs, msg_select_st, msg_select_cl, rl} from '../../elems/i.js';
import {chat} from "../../state/i.js";
import {after_msgs_ctx_click} from "../../on/i.js";
import {msg_height, remove_s_foreach} from '../../f/i.js';



export default (
    (e) => {
        var
            x = e.clientX,
            y = e.clientY,

            scroll_top = rl.scrollTop,
            
            ID = "",

            target = e.target,
            li = target.closest(".list > li"),

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
            msg_menu_st.top = `${scroll_top + (li.getBoundingClientRect()).top}px`;
            
            msg_select_st.top = (
                scroll_top
                +
                (
                    r = (
                        (
                            first = (
                                found = (
                                    document
                                    .querySelectorAll(
                                        `#msgs > .list > *[data-a="${
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

            chat.sl = Number(ID);

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
            
            window.addEventListener("click",after_msgs_ctx_click);
            msgs.addEventListener("scroll",after_msgs_ctx_click);
        }

        return (
            e.preventDefault(),
            undefined
        )
    }
);
