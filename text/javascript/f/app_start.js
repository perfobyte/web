






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
    audio_vl_v,
    audio_vl,
    pline,
    outpl,
    audio_menu,
    audio_ss_b_el,
    audio_pbsp,
    audio_pbsp_v,
    
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
    
    on_audio_click,
    on_2_volumechange,
    on_audio_vl_slider_mousedown,

    on_audio_mouseenter,
    on_audio_mouseleave,
    on_2_timeupdate,
    on_2_loadedmetadata,
    on_2_canplay,
    on_2_playing,
    on_2_pause,
    on_2_error,
    on_2_durationchange,
    on_2_ended,
    on_2_play,
    on_2_waiting,
    on_2_progress,
    on_2_abort,
    on_2_canplaythrough,
    on_2_emptied,
    on_2_ratechange,

    on_2_seeked,
    on_2_seeking,

    on_audio_pline_hover_mouseenter,

    on_audio_write_click,
    on_audio_ss_click,
    on_menu_goto_click,

    on_audio_pline_mousedown,
    on_audio_pbsp_input,
    on_audio_pbsp_mousedown,
    on_audio_decinc_click,
    
} from '../on/i.js';

import {
    O,chat,modules,note,
    
    app_value,
    app_value_view,

    EMOJI,
    emoji,
    emoji_view,
} from '../state/i.js';
import {not_passive, AUDIO_HEIGHT, API_2} from '../conf.js';
//
import {msg_time_format, msg_time_to_html, date, detail_time,time, emoji_load, update_height} from '../f/i.js';



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
            (outpl.querySelector(".wr").onclick = on_audio_write_click),

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

            (outpl.querySelector(".vl .i").onclick = on_audio_click),
            (API_2.onvolumechange = on_2_volumechange),
            (API_2.ontimeupdate = on_2_timeupdate),

            (API_2.onloadedmetadata = on_2_loadedmetadata),
            (API_2.ondurationchange = on_2_durationchange),

            (API_2.oncanplay = on_2_canplay),
            (API_2.onplaying = on_2_playing),
            (API_2.onpause = on_2_pause),
            (API_2.onerror = on_2_error),
            (API_2.onended = on_2_ended),
            (API_2.onplay = on_2_play),
            (API_2.onwaiting = on_2_waiting),
            (API_2.onprogress = on_2_progress),
            (API_2.onabort = on_2_abort),
            (API_2.oncanplaythrough = on_2_canplaythrough),
            (API_2.onemptied = on_2_emptied),
            (API_2.onratechange = on_2_ratechange),

            (API_2.onseeking = on_2_seeking),
            (API_2.onseeked = on_2_seeked),

            (outpl.querySelector(".ss").onclick = on_audio_ss_click),
            (audio_vl_v.onmousedown = on_audio_vl_slider_mousedown),

            (audio_vl.onmouseenter = on_audio_mouseenter),
            (audio_vl.onmouseleave = on_audio_mouseleave),
            
            (pline.onmousedown = on_audio_pline_mousedown),
            (pline.onmouseenter = on_audio_pline_hover_mouseenter),

            (audio_pbsp_v.onmousedown = on_audio_pbsp_mousedown),
            (audio_pbsp.oninput = on_audio_pbsp_input),

            (
                audio_ss_b_el.querySelector(".inc").onclick =
                audio_ss_b_el.querySelector(".dec").onclick =
                    on_audio_decinc_click
            ),
            
            (
                audio_ss_b_el
                .querySelectorAll(".gt")
                .forEach(
                    (v) => (
                        v.onclick = on_menu_goto_click
                    )
                )
            ),
            
            window.dispatchEvent(resize_event),
            ej.dispatchEvent(mouseleave_event),
            el_cache.bi.add("a"),
            (audio_pbsp.value = "1"),
            
            //TEST:
            
            (() => {
                var
                    time_el = () => {
                        var
                            ts = Date.now(),
                            ts_o = new Date(ts),

                            T = time(ts_o),
                            D = date(ts_o)
                        ;
                        return msg_time_to_html(
                            msg_time_format(ts,chat,T,D),
                            AUDIO_HEIGHT,
                            1,
                            `${D} ${detail_time(T, ts_o)}`,
                            chat.MT_EL.cloneNode(true),
                            chat.mt_v_el,
                        )
                    },
                    time_ul = chat.time_ul
                ;
                return (
                    msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 0, 1203201321)),
                    msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 1, 1203201321+1)),
                    msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 2, 1203201321+2)),
                    msgs_ul.appendChild(msg_file_el(MSG_FILE.cloneNode(true), 3, 1203201321+3)),

                    time_ul.appendChild(time_el()),
                    time_ul.appendChild(time_el()),
                    time_ul.appendChild(time_el()),
                    time_ul.appendChild(time_el())
                )
            })(),


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
