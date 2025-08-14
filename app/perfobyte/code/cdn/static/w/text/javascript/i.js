
import {title, origin} from './data/i.js';

import {name_blur} from './name/i.js';

import media from './media/i.js';
import O from './state/O.js';

import {chatbar_set,call_set,} from './set/i.js';

import {
    chat_create,chat_join,chat_choose_add,chat_copy,chat_keydown,chat_send,
    chat_file_select,chat_file_change,
    chat_opts_click,
} from './chat/i.js';

import {
    chatbar_ul_click, module_click, section_click,
    msg_edit_click,
    msg_delete_click,
    cl_d_click
} from './click/i.js';

import {chatbar_ul_contextmenu, msgs_contextmenu,cl_mc_contextmenu,} from './contextmenu/i.js';

import {
    msgs,tmpl,sn,ct,el_cache,b,CHA,msgbr,mdbr,file,msgs_ul,msgs_time_ul,cl_vo, loader_cl,
    cl_mc_d, cl_vd_d, cl_sh_d,
    resize_event,
    click_event,
    rl,
} from './elems.js';

import {get_chats, get_calls, get_modules, get_msgs, get_chat} from './get/i.js';

import {open_chat} from './open/i.js';
import {chat,} from './state/i.js';

import {calls_reduce,chats_reduce,messages_reduce,modules_reduce} from './reduce/i.js';
import {window_resize} from './window/i.js';

import {
    call_open, call_close, call_screen_share,
    on_track_enabled_recv, on_track_enabled_send,
    on_side_choose,
    on_fs_change,
    call_volume_onmousedown,
} from './call/i.js';

(
    (w) => {
        var
            p = w.location.search,

            h = w.history,
            D = w.document,

            ap = D.getElementById("ap"),
            cl_mc = document.getElementById("cl_mc"),

            chats = get_chats(),
            calls = get_calls(),
            modules = get_modules(),

            calls_r = {
                now: new Date(),
                chats,
            },


            modules_r = {
                M: modules,
                mdbr,
                t:origin[2],
            },

            chat_id = (chat.i = 0),

            MSGS = get_msgs(0),

            inner_wheel = (
                (e) => {
                    var
                        el = e.currentTarget,
                        delta = e.deltaY
                    ;
                    return (
                        ((delta < 0 && (el.scrollTop === 0)) || (delta > 0 && (el.scrollTop + el.clientHeight >= el.scrollHeight)))
                        &&
                        e.preventDefault(),
                        undefined
                    );
                }
            )
        ;
        return (
            D.getElementById("c_c").addEventListener("click", chat_create),
            D.getElementById("c_j").addEventListener("click", chat_join),

            D.getElementById("cadd").addEventListener("click",chat_choose_add),
            
            sn.addEventListener("blur",name_blur),

            w.addEventListener("resize",window_resize),
            
            b.forEach(a => a.addEventListener("click",section_click)),
            el_cache.bi.add("a"),

            msgs.querySelector(".list").addEventListener("copy",chat_copy),
            msgs.addEventListener("contextmenu", msgs_contextmenu),

            ctxt.addEventListener("keydown",chat_keydown),
            document.getElementById("send").addEventListener("click",chat_send),
            document.getElementById("fadd").addEventListener("click",chat_file_select),
            file.addEventListener("change",chat_file_change),
            
            media(D,O,navigator.mediaDevices,tmpl,ap,w,navigator.permissions),

            document.getElementById("msg_delete").addEventListener("click",msg_delete_click),
            document.getElementById("msg_edit").addEventListener("click",msg_edit_click),

            document.getElementById("c_o").addEventListener("click",chat_opts_click),

            CHA.addEventListener("click",chatbar_ul_click),
            CHA.addEventListener("contextmenu",chatbar_ul_contextmenu),

            document.getElementById("c_a").addEventListener("click",call_open),
            document.getElementById("c_v").addEventListener("click",call_open),
            document.getElementById("c_va").addEventListener("click",call_open),

            document.getElementById("cl_sh").addEventListener("click",call_screen_share),
            document.getElementById("clcl").addEventListener("click",call_close),
            
            cl_mc.addEventListener("click",on_track_enabled_send),
            cl_mc_d.addEventListener("click",cl_d_click),

            document.getElementById("cl_vd").addEventListener("click",on_track_enabled_send),
            cl_vd_d.addEventListener("click",cl_d_click),

            document.getElementById("cl_sh2").addEventListener("click", call_screen_share),
            cl_sh_d.addEventListener("click", cl_d_click),

            document.getElementById("cl_wa").addEventListener("click",on_track_enabled_recv),
            document.getElementById("cl_hp").addEventListener("click",on_track_enabled_recv),

            document.getElementById("cl_i").addEventListener("click",on_side_choose),
            document.getElementById("cl_u").addEventListener("click",on_side_choose),
            
            document.getElementById("cl_fs").addEventListener("click",on_fs_change),

            cl_vo.addEventListener("mousedown",call_volume_onmousedown),



            document.querySelectorAll(".inner_scroll")
            .forEach(
                (e) => {
                    e.addEventListener("wheel", inner_wheel)
                }
            ),
            
            calls.reduce(calls_reduce,calls_r),
            chats.reduce(chats_reduce,0),
            modules.reduce(modules_reduce,modules_r),

            // TODO:

            (chat.t = Date.now()),

            (
                msgs_ul
                .innerHTML = (
                    MSGS
                    .reduce(
                        messages_reduce,
                        chat
                    )
                    .v
                )
            ),
            (msgs_time_ul.innerHTML = chat.tv),

            (rl.scrollTop = rl.scrollHeight),

            (chat.loaded = MSGS.length),

            open_chat(chat_id, get_chat(chat_id)),
            
            (sn.value = O.n),

            document.querySelector(`#nv button.n[data-a="${O.I}"]`).dispatchEvent(click_event),
            
            window.dispatchEvent(resize_event),


            loader_cl.remove("a")

            // setTimeout(
            //     () => {
            
            //     },
            //     40_000
            // )
        );
    }
)(
    window
);
