


import {
    msgs,tmpl,el_cache,b,CHA,file,msgs_ul,msgs_time_ul,loader_cl,
    resize_event,
    click_event,
    rl,
    nt_au_se,nt_vd_se,mc_se,
    nt_au_se_fc,nt_vd_se_fc,mc_se_fc,
    mc,nt,
} from '../../elems.js';

import {get_chats, get_modules, get_msgs, get_chat} from '../../api/i.js';
import {open_chat} from '../../render/i.js';

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
    
} from '../i.js';
import {O,chat,modules,note, } from '../../state/i.js';


export default (
    () => {
        var
            length = {
                name: "AES-GCM",
                length: 256
            },
            salt = crypto.getRandomValues(new Uint8Array(16)),
            import_method = ["deriveKey"],
            import_conf = { name: "PBKDF2" },
            method = ["encrypt", "decrypt"],
            conf = { name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" },

            import_key = (
                (key_mat) => {
                    return crypto.subtle.deriveKey(
                        conf,
                        key_mat,
                        length,
                        false,
                        method,
                    )
                }
            ),

            app_key = (
                (key) => {
                    var
                        w = window,

                        p = w.location.search,

                        h = w.history,
                        D = w.document,

                        chats = get_chats(),
                        
                        M = get_modules(),

                        chat_id = (chat.i = 0),

                        MSGS = get_msgs(0)
                    ;
                    return (
                        (O.key = key),
                        
                        (D.getElementById("c_c").onclick = chat_create),
                        (D.getElementById("c_j").onclick = chat_join),
                        (D.getElementById("cadd").onclick = chat_choose_add),
                        
                        (w.onresize = window_resize),
                        (msgs.querySelector(".list").oncopy = chat_copy),
                        (msgs.oncontextmenu=msgs_contextmenu),
                        (ctxt.onkeydown=chat_keydown),
                        (D.getElementById("send").onclick=chat_send),
                        (D.getElementById("fadd").onclick=chat_file_select),
                        (file.onchange = chat_file_change),
                        el_cache.bi.add("a"),
                        (D.getElementById("msg_delete").onclick=msg_delete_click),
                        (D.getElementById("msg_edit").onclick=msg_edit_click),
                        (D.getElementById("c_o").onclick=chat_opts_click),
                        (CHA.onclick=chatbar_ul_click),
                        (CHA.oncontextmenu=chatbar_ul_contextmenu),

                        b.forEach(a => (a.onclick=section_click)),
                        
                        (modules.M = M)
                        .reduce(modules_reduce,modules),

                        chats
                        .reduce(
                            chats_reduce,
                            0,
                        ),

                        MSGS
                        .reduce(
                            messages_reduce,
                            chat
                        ),

                        open_chat(chat_id, get_chat(chat_id)),
                        (chat.loaded = MSGS.length),
                        
                        D.querySelector(`#nv button.n[data-a="${O.I}"]`).dispatchEvent(click_event),
                        window.dispatchEvent(resize_event),

                        (rl.scrollTop = rl.scrollHeight),
                        
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

                        loader_cl.remove("a")
                    );
                }
            )
        ;
        return (e) => {
            var
                v = e.currentTarget.querySelector("input").value
            ;
            return (
                e.preventDefault(),

                crypto.subtle.importKey(
                    "raw",
                    new TextEncoder().encode(v),
                    import_conf,
                    false,
                    import_method,
                )
                .then(
                    import_key
                )
                .then(
                    app_key
                )
            )
            
        }
    }
)();