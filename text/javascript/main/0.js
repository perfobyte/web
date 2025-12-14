
import {
    font_path,
    font_src,

    calc_list_width,
    calc_list_height,

    push,
    render_element,
    is_separation,
    string_offset_change,
} from './f/i.js';

import {
    window_event_object,
    passive_false,
    messages_fragment,
    messages_range,
    font_faces,
    workers,
    TD,
    TE,
} from "./conf/i.js";

import {
    html_style,
    body_cl,
    document,
    window,
    
    list,
    
    scrollbar_x,
    scrollbar_y,

    elements,

    MESSAGE_ROW_EL,
} from "./elems/i.js";

import {
    style_state,
    support_font_format,
    support_font,
    alloc_state,
    language_state,
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
    (window, document, Math, FontFace) => {
        var
            document_fonts = document.fonts,

            row_height = style_state.row_height,
            font_id = style_state.font_id,

            font_id_bare_str = (`_${font_id}`),

            font = support_font[font_id],
            font_name = font.name,
            font_face = null,

            list_width = 0,

            width = window.innerWidth,
            height = window.innerHeight,
            
            list_left = style_state.list_left,
            list_right = style_state.list_right,

            list_top = style_state.list_top,
            list_bottom = style_state.list_bottom
        ;

        workers[0] = new Worker("/f/text/javascript/worker/fs/1.js");
        
        window.onerror = on_error;
        window.contextmenu = on_contextmenu;
        window.onresize = on_window_resize;
        list.onmousedown = on_list_mousedown;
        list.onselectstart = on_list_selectstart;

        window.addEventListener("wheel", on_list_wheel, passive_false);
        window.onkeydown = (on_window_keydown);
        window.onkeyup = (on_window_keyup);

        scrollbar_y.onmousedown = on_scrollbar_thumb_mousedown;

        (((mode_state).row_width) === 0)
        ? (
            scrollbar_x.onmousedown = on_scrollbar_thumb_mousedown
        )
        : (
            scrollbar_x.classList.add('none')
        );

        html_style.setProperty("--width",`${width}px`),
        html_style.setProperty("--height",`${height}px`),

        html_style.setProperty(
            "--list-width",
            `${
                style_state.list_width = (
                    calc_list_width(
                        width,
                        list_left,
                        list_right
                    )
                )
            }px`
        ),

        html_style.setProperty(
            "--list-height",
            `${
                style_state.list_height = (
                    calc_list_height(
                        height,
                        list_top,
                        list_bottom,
                    )
                )
            }px`
        ),
        
        html_style.setProperty("--row-height", `${row_height}px`);
        html_style.setProperty("--font-size", `${style_state.font_size}px`);
        html_style.setProperty("--font-family",`"${font_id_bare_str}"`);

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
                font_faces[font_id] = font_face
            )
            .load()
            .then(
                () => {
                    var
                        placeholder_value = language_state.placeholder_value,
                        
                        push_text = push[0][0][0],

                        i = 0,
                        l = alloc_state.number_blocks,

                        row_width_mode = mode_state.row_width,

                        current_separation = is_separation[row_width_mode]
                    ;

                    push_text(
                        (alloc_state.string_block),
                        alloc_state.buffer_messages_view,

                        0,
                        (alloc_state.length_messages),
                        alloc_state.size_message,

                        alloc_state.offset_loaded_elements,
                        alloc_state.length_loaded_elements,

                        render_element,
                        current_separation,
                        string_offset_change[row_width_mode]
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
    globalThis.FontFace,
);
