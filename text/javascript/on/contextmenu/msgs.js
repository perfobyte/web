import {msg_menu_st, msg_menu_cl, msgs, msg_select_st, msg_select_cl, rl} from '../../elems.js';
import {chat} from "../../state/i.js";
import {remove_s_foreach} from '../../reduce/i.js';
import {after_msgs_ctx_click} from "../../on/i.js";

import {msg_height} from '../../f/i.js';



export default (
    (e) => {
        for (
            var
                x = e.clientX,
                y = e.clientY,

                L = document.querySelectorAll('#msgs > .list > *'),
                
                scroll_top = rl.scrollTop,
                l = L.length,

                ID = "",
                li = null,

                r = null,

                i = 0,
                sm = 0,

                found = null,
                
                first = null
            ;
            i < l;
            i++
        ) {
            if (
                (x >= ((r = (li = L[i]).getBoundingClientRect()).left))
                &&
                (y >= r.top)
                &&
                (y <= r.bottom)
            ) {
                msg_menu_st.top = `${scroll_top + r.top}px`;
                
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
                                            }"]`
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
                
                break;
            }
        };

        return (
            e.preventDefault(),
            undefined
        )
    }
);
