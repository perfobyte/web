

import {
    get_msgs,
    messages_push,
    message_to_html,
    
    message_append,
} from './f/i.js';

import {API_1, support_rd_o, window_event_object} from "./conf/i.js";

import {
    html_style,
    body_cl,
    document,
    window,
    resize_event,

    MESSAGE_EL,
    MESSAGE_ROW_EL,
    list,
} from "./elems/i.js";
import {support_codec, chat_state, style_state} from './state/i.js';

import {
    on_window_resize,
    on_contextmenu,
    on_error,
    on_list_mousedown,
    on_list_selectstart,
} from './on/i.js';

(
    (window,document,Math) => {
        var
            chat_id = 0,
            new_messages = get_msgs(chat_id),

            row_height = style_state.row_height
        ;

        window.onerror = on_error;
        window.contextmenu = on_contextmenu;
        list.onmousedown = on_list_mousedown;
        list.onselectstart = on_list_selectstart;

        html_style.setProperty("--row-height", `${row_height}px`);
        window_event_object.currentTarget = window;

        (
            window
            .onresize =
                on_window_resize
        )(
            window_event_object
        );

        messages_push(
            list,
            new_messages,
            0,
            new_messages.length,
            chat_state,

            row_height,
            document,

            MESSAGE_EL,
            MESSAGE_ROW_EL,

            message_to_html,
            message_append,
        );
        
        // (c_av.background = 'url("/f/image/png/logo_full30.png")'),
        // (chatbar_h1.textContent = "Enter password"),
        
        return body_cl.add('a');
    }
)(
    window,
    document,
    globalThis.Math,
);
