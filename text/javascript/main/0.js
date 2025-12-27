
import {
    font_path,
    font_src,
    
    push,
    render_element,
    is_separation,
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
    html_style as st,
    body_cl,
    
    list,
    
    scrollbar_x,
    scrollbar_y,

    elements,

    MESSAGE_ROW_EL,
    content_style,
} from "./elems/i.js";

import {
    style_state as S,
    support_font_format,
    support_font,
    alloc_state,
    language_state,
    mode_state,
    font_state,
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
    (window, document) => {
        var
            document_fonts = document.fonts,

            row_height = S.row_height,
            font_id = S.font_id,

            font_id_bare_str = (`_${font_id}`),

            font = support_font[font_id],
            font_name = font.name,
            font_face = null,

            width = window.innerWidth,
            height = window.innerHeight,
            
            list_left = S.list_left,
            list_right = S.list_right,

            list_top = S.list_top,
            list_bottom = S.list_bottom,

            list_width = (S.list_width = (width - list_left - list_right)),
            list_height = (S.list_height = (height - list_top - list_bottom)),

            row_width_mode = mode_state.row_width
        ;

        // workers[0] = new Worker("/f/text/javascript/worker/fs/1.js");
        
        window.onerror = on_error;
        window.oncontextmenu = on_contextmenu;
        list.onmousedown = on_list_mousedown;
        list.onselectstart = on_list_selectstart;

        window.addEventListener("wheel", on_list_wheel, passive_false);
        window.onkeydown = (on_window_keydown);
        window.onkeyup = (on_window_keyup);

        scrollbar_y.onmousedown = on_scrollbar_thumb_mousedown;

        if (row_width_mode === 0) {
            scrollbar_x.onmousedown = on_scrollbar_thumb_mousedown;
            S.content_right = 100;
        }
        else if (row_width_mode === 1) {
            S.content_width = list_width;
            S.list_bottom = (list_bottom = 0);

            scrollbar_x.classList.add('none');
        };
        
        st.setProperty("--row-height", `${row_height}px`);
        st.setProperty("--font-size", `${S.font_size}px`);
        st.setProperty("--font-family",`"${font_id_bare_str}"`);

        st.setProperty("--list-top", `${list_top}px`);
        st.setProperty("--list-left", `${list_left}px`);
        st.setProperty("--list-right", `${list_right}px`);
        st.setProperty("--list-bottom", `${list_bottom}px`);
        
        font_faces[0] =
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
                font_state[0]
            )
        );
        
        document_fonts.add(font_face);

        return (
            font_face
            .load()
            .then(
                () => {
                    var
                        current_separation = is_separation[row_width_mode]
                    ;

                    push(
                        (alloc_state.string_block),
                        alloc_state.buffer_messages_view,

                        0,
                        (alloc_state.length_messages),
                        alloc_state.size_message,

                        alloc_state.offset_loaded_elements,
                        alloc_state.length_loaded_elements,

                        render_element,
                        current_separation,
                    );

                    content_style.height = `${
                        S.content_height = (
                            S.loaded_height
                            + S.content_bottom
                        )
                    }px`;

                    if (row_width_mode === 0) {
                        content_style.width = `${
                            S.content_width = (
                                S.loaded_width
                                + S.content_right
                            )
                        }px`;
                    };

                    // S.content_bottom = (list_height-(row_height-list_top));

                    on_window_resize(window_event_object);
                    window.onresize = on_window_resize;

                    body_cl.add('a');
                }
            )
        );
    }
)(
    window,
    document,
);