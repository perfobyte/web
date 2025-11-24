import chars from './chars.js';

import {
    get_msgs,
    messages_push,
    message_to_html,
    
    message_append,
    font_path,
    font_src,
} from './f/i.js';

import {IMAGE, window_event_object, CANVAS_2D_CONTEXT} from "./conf/i.js";

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
import {
    chat_state,
    style_state,
    support_font_format,
    support_font,
} from './state/i.js';

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
            document_fonts = document.fonts,

            chat_id = 0,
            new_messages = get_msgs(chat_id),

            row_height = style_state.row_height,
            row_height_str = `${row_height}px`,

            font_id = style_state.font_id,
            font_id_bare_str = (`_${font_id}`),
            font_id_str = `"${font_id_bare_str}"`,

            font = support_font[font_id],
            font_name = font.name,
            
            font_face = null,

            font_size_str = `${style_state.font_size}px`
        ;

        window.onerror = on_error;
        window.contextmenu = on_contextmenu;
        list.onmousedown = on_list_mousedown;
        list.onselectstart = on_list_selectstart;
        window.onresize = on_window_resize;

        html_style.setProperty("--row-height", row_height_str);
        html_style.setProperty("--font-size", font_size_str);
        html_style.setProperty("--font-family",font_id_str);
        
        html_style.setProperty("--list-top", row_height_str);
        html_style.setProperty("--list-left", row_height_str);

        html_style.setProperty("--background-color", "000000ff");
        html_style.setProperty("--color", 'ffffffff');

        document_fonts.add(
            (
                font_face =
                    new FontFace(
                        font_id_bare_str,

                        `url("/f/font/ttf/0.ttf") format("truetype")`,
                        // font_src(
                        //     support_font_format,
                        //     font_id,
                        //     font_name,
                        //     0,
                        //     support_font_format.length,
                        //     font_path,
                        // ),
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
                    CANVAS_2D_CONTEXT.font = `${font_size_str} ${font_id_str}`;

                    (style_state.col_width = CANVAS_2D_CONTEXT.measureText("a").width)

                    console.dir(
                        (function (ctx, chars) {
                            var result = [];
                            for (var ch of chars) {
                                result.push({ ch, width: ctx.measureText(ch).width });
                            }
                            console.dir(result.filter(c => c.width !== 9.6328125))
                            return result;
                        })(CANVAS_2D_CONTEXT,chars)
                    );

                    

                    
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
