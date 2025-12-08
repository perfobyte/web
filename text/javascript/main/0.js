
import {
    download_buffer,

    standart_text_all_chars_number_reduce,
    standart_text_all_chars_width,
} from './f/dev/i.js';

import {
    messages_push,
    
    message_append,
    font_path,
    font_src,

    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,

    dom_text_width,
    standart_text_unicode_coords,

    calc_list_width,
    calc_list_height,

    append_child,
} from './f/i.js';

import {
    IMAGE,
    window_event_object,
    CANVAS_2D_CONTEXT,
    default_lines,
    passive_false,
    messages_fragment,
} from "./conf/i.js";

import {
    html_style,
    body_cl,
    document,
    window,
    resize_event,

    MESSAGE_ROW_EL,
    list,
    
    scrollbar_x,
    scrollbar_y,

    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,

    text_width_container,
} from "./elems/i.js";

import {
    style_state,
    support_font_format,
    support_font,
    alloc_state,
    mode_state,
} from './state/i.js';

import {
    on_window_resize,
    on_contextmenu,
    on_error,
    on_list_mousedown,
    on_list_selectstart,

    on_scrollbar_thumb_mousedown,
    on_list_wheel,

    on_window_keydown,
    on_window_keyup,
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

            language_state = style_state.language,

            list_width = 0,

            width = window.innerWidth,
            height = window.innerHeight,

            list_left = style_state.list_left,
            list_right = style_state.list_right,

            list_top = style_state.list_top,
            list_bottom = style_state.list_bottom,

            row_width_mode = mode_state.row_width
        ;

        alloc_state.worker = new Worker("/f/text/javascript/worker/fs/1.js");
        
        window.onerror = on_error;
        window.contextmenu = on_contextmenu;
        list.onmousedown = on_list_mousedown;
        list.onselectstart = on_list_selectstart;
        
        html_style.setProperty("--row-height", row_height_str);
        html_style.setProperty("--font-size", font_size_str);
        html_style.setProperty("--font-family",font_id_str);

        html_style.setProperty(
            "--list-width",
            `${
                style_state.list_width = (
                    list_width = (
                        calc_list_width(
                            width,
                            list_left,
                            list_right
                        )
                    )
                )
            }px`
        );
        html_style.setProperty(
            "--list-height",
            `${
                style_state.list_height = (
                    calc_list_height(
                        height,
                        list_top,
                        list_bottom
                    )
                )
            }px`
        );
        
        html_style.setProperty("--list-top", `${list_top}px`);
        html_style.setProperty("--list-left", `${list_left}px`);
        html_style.setProperty("--list-right", `${list_right}px`);
        html_style.setProperty("--list-bottom", `${list_bottom}px`);

        html_style.setProperty("--background-color", '#FFFFFFFF');
        html_style.setProperty("--color", "#000000FF");
        html_style.setProperty("--placeholder-color", '#808080FF');
        
        document_fonts.add(
            (
                font_face = (
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
                        placeholder_value = language_state.placeholder_value,
                        placeholder_lines = Array.from(default_lines),

                        messages_length = (
                            (placeholder_lines[0][1] = placeholder_value.length),

                            new_messages.push({
                                id: new_messages.length,
                                lines: placeholder_lines,
                                value: placeholder_value,
                            }),

                            new_messages.length
                        ),

                        message_append_specific = (
                            message_append[
                                row_width_mode
                            ]
                        )
                    ;
                    
                    style_state.loaded_height = (
                        messages_push(
                            new_messages,

                            0,
                            messages_length,
                
                            row_height,
                            style_state.loaded_height,
                            
                            messages_fragment,
                            MESSAGE_ROW_EL,
                
                            message_append_specific,
                            
                            text_width_container,
                            dom_text_width,

                            list_width,

                            append_child,
                        )
                    );

                    list.appendChild(messages_fragment);
                    
                    (row_width_mode === 0)
                    ? (
                        scrollbar_x.onmousedown = on_scrollbar_thumb_mousedown
                    )
                    : (
                        scrollbar_x.classList.add('none')
                    );
                    
                    scrollbar_y.onmousedown = on_scrollbar_thumb_mousedown;

                    window.addEventListener("wheel", on_list_wheel, passive_false);
                    window.addEventListener("keydown",on_window_keydown);
                    window.addEventListener("keyup",on_window_keyup);

                    on_window_resize(window_event_object);
                    window.onresize = on_window_resize;

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
