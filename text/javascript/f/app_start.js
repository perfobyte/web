
import {
    msgs,
    msgs_list,
    
    ctxt_i,
    
    html,
    html_st,

    resize_event,
    click_event,
    mouseleave_event,
} from '../elems/i.js';


import {
    msgs_contextmenu,
    on_msg_edit_click,
    on_msg_delete_click,
    window_resize,
    chat_copy,
    chat_keydown,
    chat_send,

    on_ctxt_click,
} from '../on/i.js';

import {
    O,
    chat,
    
    app_value,
    app_value_view,
} from '../state/i.js';
import {
    not_passive,
    API_2,
} from '../conf/i.js';
import {
    msg_time_format,
    msg_time_to_html,
    date,
    detail_time,
    time,
    
    open_chat,
    msg_file_el,
    msg_image_el,
    get_chats,
    get_modules,
    get_msgs, 
    get_chat,
    
    messages_reduce,
} from './i.js';

export default (
    () => {
        var
            w = globalThis.window,
            D = w.document,

            chats = get_chats(),
            M = get_modules(),

            chat_id = (chat.i = 0),
            MSGS = get_msgs(chat_id),

            I = O.I
        ;
        return (
            // [ message_editor ]
            (D.getElementById("send").onclick=chat_send),
            (D.getElementById("msg_delete").onclick=on_msg_delete_click),
            (D.getElementById("msg_edit").onclick=on_msg_edit_click),
            (ctxt.onclick = on_ctxt_click),
            (ctxt_i.onkeydown = chat_keydown),

            // [ messages ]
            (msgs.oncontextmenu = msgs_contextmenu),
            (msgs_list.oncopy = chat_copy),

            // [ window ]
            (w.onresize = window_resize),

            MSGS.reduce(messages_reduce,chat),
            open_chat(chat_id, get_chat(chat_id)),
            (chat.loaded = MSGS.length),

            window.dispatchEvent(resize_event)
        )
    }
);
