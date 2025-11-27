
import {
    get_msgs,
    messages_push,
    message_to_html,
    
    message_append,
    font_path,
    font_src,
    get_char_width,

    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
} from './f/i.js';

import {
    IMAGE,
    window_event_object,
    CANVAS_2D_CONTEXT,
    default_lines,
    passive_false,
} from "./conf/i.js";

import {
    html_style,
    body_cl,
    document,
    window,
    resize_event,

    MESSAGE_EL,
    MESSAGE_ROW_EL,
    list,
    char_width,

    scrollbar_x,
    scrollbar_y,

    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style
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

    on_scrollbar_thumb_mousedown,
    on_list_wheel,
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

            font_size_str = `${style_state.font_size}px`,

            language_state = style_state.language
        ;

        window.onerror = on_error;
        window.contextmenu = on_contextmenu;
        list.onmousedown = on_list_mousedown;
        list.onselectstart = on_list_selectstart;
        window.onresize = on_window_resize;

        html_style.setProperty("--row-height", row_height_str);
        html_style.setProperty("--font-size", font_size_str);
        html_style.setProperty("--font-family",font_id_str);
        
        html_style.setProperty("--list-top", `${style_state.list_top}px`);
        html_style.setProperty("--list-left", `${style_state.list_left}px`);
        html_style.setProperty("--list-right", `${style_state.list_right}px`);
        html_style.setProperty("--list-bottom", `${style_state.list_bottom}px`);

        html_style.setProperty("--background-color", '#FFFFFFFF');
        html_style.setProperty("--color", "#000000FF");
        html_style.setProperty("--placeholder-color", '#808080FF');
        
        console.dir(get_char_width(char_width, "a"));

        document_fonts.add(
            (
                font_face =
                    new FontFace(
                        font_id_bare_str,
                        font_src(
                            support_font_format,
                            font_id,
                            font_name,
                            0,
                            support_font_format.length,
                            font_path,
                        ),
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
                    var
                        fragment = null,
                        placeholder_value = language_state.placeholder_value,
                        element = MESSAGE_ROW_EL.cloneNode(true),
                        placeholder_block = MESSAGE_EL.cloneNode(true),
                        
                        SIMPLE_MESSAGE_ROW = MESSAGE_ROW_EL.cloneNode(true)
                    ;
                    
                    SIMPLE_MESSAGE_ROW.querySelector(".message_inline").classList.add('simple');
                    
                    fragment = messages_push(
                        list,
                        new_messages,
                        0,
                        new_messages.length,
                        chat_state,
            
                        row_height,
                        document,
            
                        MESSAGE_EL,
                        SIMPLE_MESSAGE_ROW,
            
                        message_to_html,
                        message_append,
                    );

                    default_lines[0][1] = placeholder_value.length;
                    element.querySelector(".message_inline").classList.add("placeholder");

                    chat_state.loaded_height = message_to_html(
                        placeholder_value,
                        default_lines,
                        1,
                        0,
                        1,
                        chat_state.loaded_height,
    
                        placeholder_block,
                        element,
                        chat_state,
                        row_height,
                        message_append,
                    );

                    placeholder_block.classList.add("input");

                    chat_state.loaded++;
                    fragment.appendChild(placeholder_block);

                    list.appendChild(fragment);

                    window_event_object.currentTarget = window;
                    on_window_resize(window_event_object);

                    scrollbar_x.onmousedown =
                    scrollbar_y.onmousedown =
                        on_scrollbar_thumb_mousedown;


                    window.addEventListener("wheel", on_list_wheel, passive_false);

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
