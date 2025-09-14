






import {
    msgs,el_cache,b,file,msgs_ul,loader_cl,
    resize_event,
    click_event,
    mouseleave_event,
    nt_au_se,nt_vd_se,mc_se,
    nt_au_se_fc,nt_vd_se_fc,mc_se_fc,
    mc,nt,
    
    EJ_EL,
    ctxt_i,

    ej, ej_p_el, ej_p_list, ej_p_in,

    MSG_FILE,
    MSG_IMAGE,

    html,
    chap,
    VIEW_1, VIEW_1_IMG,
} from '../elems.js';

import {get_chats, get_modules, get_msgs, get_chat} from '../api/i.js';
import {open_chat, msg_file_el, msg_image_el} from '../render/i.js';

import {chats_reduce,messages_reduce,modules_reduce} from '../reduce/i.js';
import {
    chatbar_ul_click, section_click,
    chatbar_ul_contextmenu, msgs_contextmenu,
    msg_edit_click, msg_delete_click,
    window_resize,
    chat_create,chat_join,chat_choose_add,chat_copy,chat_keydown,chat_send,
    chat_file_select,chat_file_change,
    chat_opts_click,

    nt_au_se_click,nt_vd_se_click,
    nt_au_se_change,nt_vd_se_change,
    mc_se_click,mc_se_change,
    mc_mdown,nt_mdown,

    on_html_wheel,on_html_scroll,
    on_ctxt_click,
    on_ej_p_click,
    on_ej_mouseleave,
    on_ej_click,
    on_ej_contextmenu,
    on_ej_p_in_scroll,
    on_view_scroll_bar_mousedown,

    on_v1cl_click,
    on_view_image_wheel,
    on_view_image_load,
    on_msg_image_error,
    on_view_image_mousedown,
    
    on_view_image_zoom_cb,
    on_v1dl_click,

    on_target_mouseenter,
    on_target_mouseleave,
} from '../on/i.js';

import {
    O,chat,modules,note,
    
    app_value,
    app_value_view,

    EMOJI,
    emoji,
    emoji_view,
} from '../state/i.js';
import {not_passive} from '../conf.js';
import {emoji_load, update_height} from '../f/i.js';


export default (
    () => {
        var
            w = globalThis.window,
            D = w.document,

            chats = get_chats(),
            M = get_modules(),

            chat_id = (chat.i = 0),
            MSGS = get_msgs(chat_id),
            ej_p_fe = ej_p_el.firstElementChild,

            I = O.I
        ;
        
        return (
            ej.setAttribute("title", "Emoji"),
            (nt_au_se_fc.textContent = note.nt_au_l),
            (nt_vd_se_fc.textContent = note.nt_vd_l),
            (mc_se_fc.textContent = note.au_l),

            (modules.M = M).reduce(modules_reduce,modules),
            chats.reduce(chats_reduce,0),
            MSGS.reduce(messages_reduce,chat),
            
            open_chat(chat_id, get_chat(chat_id)),
            (chat.loaded = MSGS.length),

            emoji_view.setUint16(6,emoji_load(0,(emoji[2]*2),EMOJI,EJ_EL,ej_p_list),true),
            (ej_p_list.style.height = `${(EMOJI.length/emoji[0])*40}px`),

            (D.getElementById(`s0`).value = app_value_view.getUint16(0, true).toString()),
            (D.getElementById(`s1`).value = app_value[2].toString()),
            (D.getElementById(`s2`).value = app_value[3].toString()),
            
            b.forEach(a => (a.onclick=section_click)),

            (D.getElementById("c_c").onclick = chat_create),
            (D.getElementById("c_j").onclick = chat_join),
            (D.getElementById("cadd").onclick = chat_choose_add),
            (ej.onclick = on_ej_click),
            (D.getElementById("send").onclick=chat_send),
            (D.getElementById("fadd").onclick=chat_file_select),
            (D.getElementById("msg_delete").onclick=msg_delete_click),
            (D.getElementById("msg_edit").onclick=msg_edit_click),
            (D.getElementById("c_o").onclick=chat_opts_click),
            (chap.onclick=chatbar_ul_click),
            (D.getElementById("v1cl").onclick = on_v1cl_click),
            (D.getElementById("v1dl").onclick = on_v1dl_click),
            (ctxt.onclick = on_ctxt_click),
            (ej_p_list.onclick = on_ej_p_click),

            (ej.oncontextmenu = on_ej_contextmenu),
            (msgs.oncontextmenu = msgs_contextmenu),
            (chap.oncontextmenu=chatbar_ul_contextmenu),

            (ej_p_in.onscroll = on_ej_p_in_scroll),
            (window.onscroll = on_html_scroll),

            (nt_au_se.onfocus =  nt_au_se_click),
            (nt_vd_se.onfocus =  nt_vd_se_click),
            (mc_se.onfocus = mc_se_click),

            (file.onchange = chat_file_change),
            (nt_au_se.onchange = nt_au_se_change),
            (nt_vd_se.onchange = nt_vd_se_change),
            (mc_se.onchange = mc_se_change),

            (ej_p_fe.onmouseenter = on_target_mouseenter),
            
            (mc.onmousedown = mc_mdown),
            (nt.onmousedown = nt_mdown),
            (VIEW_1.onmousedown = on_view_image_mousedown),

            (ej_p_fe.onmouseleave = on_target_mouseleave),
            (ej.onmouseleave = on_ej_mouseleave),

            (ctxt_i.onkeydown = chat_keydown),
            (msgs.querySelector(".list").oncopy = chat_copy),
            (w.onresize = window_resize),
            
            D.addEventListener('wheel', on_html_wheel, not_passive),
            VIEW_1.addEventListener("wheel",on_view_image_wheel,not_passive),

            window.dispatchEvent(resize_event),
            ej.dispatchEvent(mouseleave_event),
            el_cache.bi.add("a"),
            
            //TEST:
            msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 0, 1203201321)),
            msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 1, 1203201321+1)),
            msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 2, 1203201321+2)),
            msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 3, 1203201321+3)),
            //

            D.querySelector(`#nv button.n[data-a="${I}"]`).dispatchEvent(click_event),
            update_height(I),
            (html.scrollTop = html.scrollHeight),

            loader_cl.remove("a")

            // false && fetch("https://picsum.photos/536/354")
            // .then(r=>r.arrayBuffer())
            // .then(bf => {
            //     var
            //         blob = new Blob([bf], { type: "image/png" }),
            //         NEW_IMG = new Image(),
            //         url = URL.createObjectURL(blob)
            //     ;
            //     return (
            //         (NEW_IMG.onload = function() {
                        
            //             return (
            //                 (NEW_IMG.onload=null),

            //                 window.addEventListener("mousemove", on_view_image_window_mousemove),

            //                 msgs_ul.appendChild(
            //                     msg_image_el(
            //                         MSG_IMAGE.cloneNode(true),
            //                         this,
            //                         12312312,
            //                         this.naturalWidth,
            //                         this.naturalHeight,
            //                     )
            //                 ),
                            
            //                 on_view_scroll_bar_mousedown(
            //                     window,
            //                     D.querySelector("#view1 .zoom"),
            //                     on_view_image_zoom_cb,
            //                 ),

            //                 (VIEW_1_IMG.onload = on_view_image_load),
            //                 (VIEW_1_IMG.src = url),

            //                 update_height(I),
            //                 (html.scrollTop = html.scrollHeight)
            //             );
            //         }),
            //         (NEW_IMG.onerror=on_msg_image_error),
            //         (NEW_IMG.src=url)
            //     )
            // })
        )
    }
);