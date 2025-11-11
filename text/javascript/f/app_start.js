
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

            I = O.I
        ;
        return (
            support_codec[2].reduce(check_can_play_type, support_rd_o[2]),
            support_codec[3].reduce(check_can_play_type, support_rd_o[3])
            
            (API_1.onload = API_1.onerror = on_test_image_type),
            (API_1.src = support_codec[1][0])
        )
    }
);
