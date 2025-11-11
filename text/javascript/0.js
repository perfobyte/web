

import {
    preventDefault,
    check_can_play_type,

    get_msgs,
    get_chat,
    open_chat,

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
    msgs,
    msgs_list,

} from "./elems/i.js";
import {support_codec, chat} from './state/i.js';

import {
    on_chat_send,
    on_msg_delete_click,
    on_msg_edit_click,
    on_ctxt_click,
    on_chat_keydown,
    on_msgs_contextmenu,
    on_chat_copy,
    on_window_resize,
} from './on/i.js';


(
    (w,D,c) => {
        var
            // chats = get_chats(),
            // M = get_modules(),

            chat_id = (chat.i = 0),
            chat_msgs = get_msgs(chat_id)
        ;
        return void (
            (w.onerror = c.error),
            w.addEventListener("contextmenu",preventDefault),

            (D.getElementById("send").onclick=on_chat_send),
            (D.getElementById("msg_delete").onclick=on_msg_delete_click),
            (D.getElementById("msg_edit").onclick=on_msg_edit_click),
            (ctxt.onclick = on_ctxt_click),
            (ctxt_i.onkeydown = on_chat_keydown),

            (msgs.oncontextmenu = on_msgs_contextmenu),
            (msgs_list.oncopy = on_chat_copy),

            (w.onresize = on_window_resize),

            chat_msgs.reduce(messages_reduce,chat),
            open_chat(chat_id, get_chat(chat_id)),
            (chat.loaded = chat_msgs.length),

            w.dispatchEvent(resize_event),

            (c_av.backgroundImage = 'url("/f/image/png/logo_full30.png")'),
            (chatbar_h1.textContent = "Enter password"),

            body_cl.add('a')
        )
    }
)(
    window,
    document,
    console,
);
