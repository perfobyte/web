

import {
    get_msgs,
    messages_push,
    message_to_html,
    message_height,
    message_append,
} from './f/i.js';

import {API_1, support_rd_o} from "./conf/i.js";

import {
    body_cl,
    document,
    window,
    resize_event,

    MESSAGE_EL,
    MESSAGE_ROW_EL,
} from "./elems/i.js";
import {support_codec, chat_state,} from './state/i.js';

import {
    on_window_resize,
    on_contextmenu,
    on_error,
} from './on/i.js';

(
    (window,document,Math) => {
        var
            chat_id = 0,
            new_messages = get_msgs(chat_id)
        ;
        window.onerror = on_error;
        window.onresize = on_window_resize;
        window.contextmenu = on_contextmenu;

        messages_push(
            list,
            new_messages,
            0,
            new_messages.length,
            chat_state,
            document,

            MESSAGE_EL,
            MESSAGE_ROW_EL,

            message_to_html,
            message_height,
            message_append,
        );

        window.dispatchEvent(resize_event);

        // (c_av.background = 'url("/f/image/png/logo_full30.png")'),
        // (chatbar_h1.textContent = "Enter password"),
        
        return body_cl.add('a');
    }
)(
    window,
    document,
    globalThis.Math,
);
