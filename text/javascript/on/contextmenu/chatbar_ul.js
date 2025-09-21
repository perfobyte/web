

import {chatbar_h1, c_av,msgs, chat_menu, chat_menu_time, el_cache, html} from '../../elems.js';
import {get_chat, get_chats_length} from '../../api/i.js';
import {full_datetime, check_range_x, check_range_y} from '../../f/i.js';
import {after_chat_menu_0_click, after_chat_menu_0_scroll} from '../i.js';


export default (
    (e) => {
        var
            chap = null,
            st = null,

            y = 0,
            x = 0,

            chat_menu_h = 0,
            chat_menu_w = 0,
            
            chap = e.currentTarget,
            cha = chap.querySelector("#cha"),
            
            st_el = null,


            scrollTop = html.scrollTop,

            Y = (cha.getBoundingClientRect().top),

            pos_y = (e.clientY - Y),

            id = Math.floor(pos_y / 50),

            cl = null,

            window = e.view
        ;
        return (id < get_chats_length()) && (
            e.preventDefault(),
            e.stopPropagation(),
            
            (
                chat_menu_time
                .textContent = (
                    "Created "
                    + full_datetime(
                        new Date(
                            get_chat(el_cache.ctx_menu_i = id)
                            .t
                        )
                    )
                )
            ),

            (
                (st = (st_el = document.getElementById("chat_menu_0")).style)
                .top = (
                    `${
                        check_range_x(e.clientY,st_el.clientHeight,(window.innerHeight-40))
                    }px`
                )
            ),

            (
                st.left = (
                    `${
                        check_range_x(e.pageX,st_el.offsetWidth,(window.innerWidth-20))
                    }px`
                )
            ),

            (cl=st_el.classList).contains("a")
            ? (
                cha.querySelector('.chbr > button.ctx').classList.remove("ctx")
            )
            : (
                window.addEventListener("click",after_chat_menu_0_click),
                window.addEventListener("contextmenu",after_chat_menu_0_click),
                window.addEventListener("scroll",after_chat_menu_0_scroll),
                cl.add('a')
            ),

            cha.querySelector(`.chbr > button[data-a="${id}"]`).classList.add("ctx"),

            undefined
        )
    }
)