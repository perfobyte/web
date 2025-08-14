

import {chatbar_h1,c_av,msgs, chat_menu, chat_menu_time, el_cache} from '../elems.js';
import {get_chat, get_chats_length} from '../get/i.js';
import {full_datetime} from '../f/i.js';
import {after_chatbar_ul_click} from '../click/i.js';

export default (
    (e) => {
        var
            chap = null,
            st = null,

            y = 0,
            x = 0,

            chat_menu_h = 0,
            chat_menu_w = 0,

            
            cha = e.currentTarget,

            id = (
                Math.floor(
                    (e.clientY - cha.getBoundingClientRect().top) / 50
                )
            ),

            cl = chat_menu.classList
        ;
        return (id < get_chats_length()) && (            
            e.preventDefault(),
            (
                cl.contains("a")
                ? (el_cache.ctx_menu_i === id)
                : (
                    cl.add("a"),
                    false
                )
            )
            ? cl.remove('a')
            : (
                window.addEventListener("click",after_chatbar_ul_click),
                window.addEventListener("contextmenu",after_chatbar_ul_click),
                e.stopPropagation(),

                (
                    chat_menu_time
                    .textContent =
                        "Created "
                        + full_datetime(
                            new Date(
                                get_chat(el_cache.ctx_menu_i = id)
                                .t
                            )
                        )
                ),

                ((((chap=cha.parentElement).clientHeight + 50) - (y=e.pageY)) < (chat_menu_h = chat_menu.clientHeight)) && (y-=chat_menu_h),
                
                (
                    (
                        st =
                            chat_menu
                            .style
                    )
                    .top = y + "px"
                ),

                (
                    st.left = e.pageX + "px"
                )
            )
        )
    }
)