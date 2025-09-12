


import {
    msgs,tmpl,el_cache,b,CHA,file,msgs_ul,msgs_time_ul,loader_cl,
    resize_event,
    click_event,
    mouseleave_event,
    rl,
    nt_au_se,nt_vd_se,mc_se,
    nt_au_se_fc,nt_vd_se_fc,mc_se_fc,
    mc,nt,
    
    scrollo,
    EJ_EL,
    ctxt_i,

    ej, ej_p_el, ej_p, ej_p_list, ej_p_in,

    MSG_FILE,
    MSG_IMAGE,

    html,
    VIEW_1, VIEW_1_IMG, VIEW_1_PN,
} from '../../elems.js';

import {
    ROUND_DATA,
    SIGMA,
    c3_update,
    c3_param_setup,
    c3_param,
    c3_to32,
    
} from '../../lib/cha3js/0.js';


import {get_chats, get_modules, get_msgs, get_chat} from '../../api/i.js';
import {open_chat, msg_file_el, msg_image_el} from '../../render/i.js';

import {chats_reduce,messages_reduce,modules_reduce} from '../../reduce/i.js';
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
    on_scroll_target,
    on_ej_p_click,
    on_ej_mouseleave,
    on_ej_click,
    on_ej_contextmenu,
    on_ej_p_in_scroll,
    on_ctxt_beforeinput,
    on_view_scroll_bar_mousedown,

    on_v1cl_click,
    on_view_image_wheel,
    stop_prevent,
    on_test_image_type,
    on_view_image_load,
    on_msg_image_error,
    on_view_image_mousedown,
    view_image_zoom_cb,
    on_v1dl_click,
} from '../i.js';

import {
    O,chat,modules,note,scroll_value,

    app_params,

    app_key,
    app_key_stream,
    app_mix,
    app_nonce,
    app_param,
    app_param_bf,
    app_value,
    app_value_copy,
    app_value_str,
    app_value_view,

    EMOJI,
    emoji,
    emoji_view,
    
    support_format_text,
    support_format_image,

    view,
    
} from '../../state/i.js';
import {TE, TD, ES, not_passive, IMG, image_mime} from '../../conf.js';
import {to_binary, to_base64, emoji_load, update_height} from '../../f/i.js';


export default (
    (e) => {
        var
            
            ls_0 = localStorage.getItem("\x00"),
            key_value = e.currentTarget.querySelector("input").value,

            w = window,

            p = w.location.search,

            h = w.history,
            D = w.document,

            chats = get_chats(),
            
            M = get_modules(),

            chat_id = (chat.i = 0),

            MSGS = get_msgs(0),

            I = O.I,

            bc = app_params[0],
            r = app_params[1],
            bs = app_params[2],
            kl = app_params[3],
            vl = app_params[6],

            VIEW_PN_CB = () => VIEW_1_PN.remove("a")
        ;
        
        return (
            e.preventDefault(),
            
            app_key.set(TE.encode(key_value).subarray(0, kl)),
            app_param_bf.set(c3_param(c3_param_setup(app_param,SIGMA),app_key,bc,app_nonce,c3_to32)),

            (ls_0 === null)
            ? (
                app_value_copy.set(app_value),
                localStorage
                .setItem(
                    "\x00",
                    to_base64(
                        app_value_str,
                        c3_update(
                            app_value_copy,0,vl,app_key_stream,bc,r,bs,app_mix,app_param_bf,ROUND_DATA
                        ),
                        0,
                        vl,
                    ),
                )
            )
            : (
                c3_update(
                    to_binary(
                        app_value,
                        globalThis.atob(ls_0),
                        0,
                        vl,
                    ),
                    0,vl,app_key_stream,bc,r,bs,app_mix,app_param_bf,ROUND_DATA
                )
            ),

            (D.getElementById("c_c").onclick = chat_create),
            (D.getElementById("c_j").onclick = chat_join),
            (D.getElementById("cadd").onclick = chat_choose_add),
            
            (w.onresize = window_resize),
            (msgs.querySelector(".list").oncopy = chat_copy),
            (msgs.oncontextmenu=msgs_contextmenu),

            on_scroll_target(ej_p_el.firstElementChild),

            (ctxt_i.onkeydown = chat_keydown),
            (ctxt.onclick = on_ctxt_click),
            

            (ej.onclick = on_ej_click),
            (ej.oncontextmenu = on_ej_contextmenu),
            (ej.onmouseleave = on_ej_mouseleave),

            (D.getElementById("send").onclick=chat_send),
            (D.getElementById("fadd").onclick=chat_file_select),
            (file.onchange = chat_file_change),
            el_cache.bi.add("a"),
            (D.getElementById("msg_delete").onclick=msg_delete_click),
            (D.getElementById("msg_edit").onclick=msg_edit_click),
            (D.getElementById("c_o").onclick=chat_opts_click),
            (CHA.onclick=chatbar_ul_click),
            (CHA.oncontextmenu=chatbar_ul_contextmenu),


            ej_p_in.addEventListener("scroll",on_ej_p_in_scroll),
            (ej_p_list.style.height = `${(EMOJI.length/emoji[0])*40}px`),

            b.forEach(a => (a.onclick=section_click)),

            (D.getElementById(`s0`).value = app_value_view.getUint16(0, true).toString()),
            (D.getElementById(`s1`).value = app_value[2].toString()),
            (D.getElementById(`s2`).value = app_value[3].toString()),
            
            emoji_view.setUint16(6,emoji_load(0,emoji[2]*2,EMOJI,EJ_EL,ej_p_list),true),

            (ej_p_list.onclick = on_ej_p_click),
            
            (modules.M = M).reduce(modules_reduce,modules),

            chats.reduce(chats_reduce,0),
            MSGS.reduce(messages_reduce,chat),

            open_chat(chat_id, get_chat(chat_id)),
            (chat.loaded = MSGS.length),

            document.addEventListener('wheel', on_html_wheel, not_passive),
            (window.onscroll = on_html_scroll),
            
            D.querySelector(`#nv button.n[data-a="${I}"]`).dispatchEvent(click_event),

            window.dispatchEvent(resize_event),
            ej.dispatchEvent(mouseleave_event),
            ej.setAttribute("title", "Emoji"),

            
            
            (nt_au_se.onfocus =  nt_au_se_click),
            (nt_au_se.onchange = nt_au_se_change),
            (nt_au_se_fc.textContent = note.nt_au_l),

            (nt_vd_se.onfocus =  nt_vd_se_click),
            (nt_vd_se.onchange = nt_vd_se_change),
            (nt_vd_se_fc.textContent = note.nt_vd_l),

            (mc_se.onfocus = mc_se_click),
            (mc_se.onchange = mc_se_change),
            (mc_se_fc.textContent = note.au_l),

            (mc.onmousedown = mc_mdown),
            (nt.onmousedown = nt_mdown),

            (D.getElementById("v1cl").onclick = on_v1cl_click),

            (support_format_text[0] = 1),

            (IMG.onload = IMG.onerror = on_test_image_type),
            (IMG.src = image_mime[0]),

            VIEW_1.addEventListener("wheel",on_view_image_wheel,not_passive),
            on_view_image_mousedown(VIEW_1,view),

            //TODO:
            window.addEventListener("mousemove", () => {
                return (
                    clearTimeout(view[7]),
                    VIEW_1_PN.add("a"),
                    (view[7] = setTimeout(VIEW_PN_CB,4_000))
                );
            }),

            (D.getElementById("v1dl").onclick = on_v1dl_click),

            
            //TODO:
            msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 0, 1203201321)),
            msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 1, 1203201321+1)),
            msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 2, 1203201321+2)),
            msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 3, 1203201321+3)),

            fetch("https://picsum.photos/536/354")
            .then(r=>r.arrayBuffer())
            .then(bf => {
                var
                    blob = new Blob([bf], { type: "image/png" }),
                    NEW_IMG = new Image(),
                    url = URL.createObjectURL(blob)
                ;
                return (
                    (NEW_IMG.onload = function() {
                        
                        return (
                            (NEW_IMG.onload=null),
                            msgs_ul.appendChild(
                                msg_image_el(
                                    MSG_IMAGE.cloneNode(true),
                                    this,
                                    12312312,
                                    this.naturalWidth,
                                    this.naturalHeight,
                                )
                            ),
                            
                            on_view_scroll_bar_mousedown(
                                window,
                                D.querySelector("#view1 .zoom"),
                                view_image_zoom_cb,
                            ),

                            (VIEW_1_IMG.onload = on_view_image_load),
                            (VIEW_1_IMG.src = url),

                            update_height(1),
                            (html.scrollTop = html.scrollHeight)
                        );
                    }),
                    (NEW_IMG.onerror=on_msg_image_error),
                    (NEW_IMG.src=url)
                )
            })
            
            
        )
    }
);