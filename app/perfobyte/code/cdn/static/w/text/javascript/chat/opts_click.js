import {chat_menu,chat_menu_time} from '../elems.js';
import {after_chatbar_ul_click} from '../click/i.js'
import {full_datetime} from '../f/i.js';
import {chat} from '../state/i.js';
import {get_chat} from '../get/i.js';



export default (
    (e) => {
        var cl = chat_menu.classList;
        return (
            chat_menu.setAttribute("style",""),

            cl.toggle("b")
            ? (
                window.addEventListener("click",after_chatbar_ul_click),
                window.addEventListener("contextmenu",after_chatbar_ul_click),

                e.stopPropagation(),

                (
                    chat_menu_time
                    .textContent =
                        "Created "
                        + full_datetime(
                            new Date(
                                get_chat(chat.i)
                                .t
                            )
                        )
                ),

                cl.add("a")
            )
            : cl.remove("a")
        )
    }
)