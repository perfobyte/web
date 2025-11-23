

import {
    get_msgs,
    messages_push,
    message_to_html,
    
    message_append,
    fonts,
    font_path,
    
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
            i = 0,
            l = 0,

            document_fonts = document.fonts,

            chat_id = 0,
            new_messages = get_msgs(chat_id),

            row_height = style_state.row_height,

            font_id = style_state.font_id,
            font_id_str = font_id.toString(),

            font = fonts[font_id],
            font_name = font.name,
            
            font_formats = support_codec[4],
            f = null,
            last_i = 0,
            font_face_src = '',
            font_face_load = null,
            font_face = null
        ;

        last_i = ((l = font_formats.length) - 1);
        for(;i<l;i++){
            f = font_formats[i];
            font_face_src +=
                `url("${
                    font_path(
                        font_id,
                        f.extension
                    )
                }${
                    (f.id === 4)
                    ? `#${font_name}`
                    : ""
                }") format("${
                    f.format
                }")${
                    (last_i === i)
                    ? ""
                    : ","
                }`
        };

        window.onerror = on_error;
        window.contextmenu = on_contextmenu;
        list.onmousedown = on_list_mousedown;
        list.onselectstart = on_list_selectstart;
        window.onresize = on_window_resize;

        html_style.setProperty("--row-height", `${row_height}px`);
        html_style.setProperty("--font-size", `${style_state.font_size}px`);
        html_style.setProperty("--font-family",`"${font_id_str}"`);

        document_fonts.add(
            (
                font_face =
                    new FontFace(
                        font_id_str,
                        font_face_src,
                        style_state
                    )
            )
        );

        return (
            (
                style_state
                .font_face = font_face
            )
            .load()
            .then(
                () => {
                    window_event_object.currentTarget = window;
                    on_window_resize(window_event_object);

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
            )
        );
    }
)(
    window,
    document,
    globalThis.Math,
);
