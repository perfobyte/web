

import {
    preventDefault,
    get_msgs,
    messages_reduce,
} from './f/i.js';
import {API_1, support_rd_o} from "./conf/i.js";
import {
    c_av,
    chatbar_h1,
    body_cl,
    document,
    window,
    resize_event,
    ctxt_i,
    ctxt,
    msgs_list,
    ej_open_button,
    send_button,
} from "./elems/i.js";
import {support_codec, chat, EMOJI} from './state/i.js';

import {
    on_message_send_click,
    on_msg_delete_click,
    on_msg_edit_click,
    on_ctxt_click,
    on_chat_keydown,
    on_msgs_contextmenu,
    on_chat_copy,
    on_window_resize,
} from './on/i.js';


(
    (w,D,c, Math) => {
        var
            chat_id = (chat.i = 0),
            chat_msgs = get_msgs(chat_id)
        ;
        return void (
            (w.onerror = c.error),
            w.addEventListener("contextmenu",preventDefault),

            (send_button.onclick=on_message_send_click),
            (D.getElementById("msg_delete").onclick=on_msg_delete_click),
            (D.getElementById("msg_edit").onclick=on_msg_edit_click),
            (ctxt.onclick = on_ctxt_click),
            (ctxt_i.onkeydown = on_chat_keydown),

            (msgs_list.oncopy = on_chat_copy),

            (w.onresize = on_window_resize),

            chat_msgs.reduce(messages_reduce,chat),
            
            (chat.loaded = chat_msgs.length),

            w.dispatchEvent(resize_event),

            (c_av.background = 'url("/f/image/png/logo_full30.png")'),
            (chatbar_h1.textContent = "Enter password"),

            (ej_open_button.textContent = EMOJI[Math.floor(Math.random() * EMOJI.length)]),
            
            body_cl.add('a')
        )
    }
)(
    window,
    document,
    console,
    globalThis.Math,
);
