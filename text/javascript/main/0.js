
import {
    font_path,
    font_src,

    calc_list_width,
    calc_list_height,
} from './f/i.js';

import {
    window_event_object,
    passive_false,
    messages_fragment,
    font_faces,
    workers,
} from "./conf/i.js";

import {
    html_style,
    body_cl,
    document,
    window,
    
    list,
    
    scrollbar_x,
    scrollbar_y,
} from "./elems/i.js";

import {
    style_state,
    support_font_format,
    support_font,
    alloc_state,
    mode_state,
    language_state,
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
                        placeholder_value = language_state.placeholder_value
                    ;
                    
                    // list.appendChild(messages_fragment);
                    
                    on_window_resize(window_event_object);
                    
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
