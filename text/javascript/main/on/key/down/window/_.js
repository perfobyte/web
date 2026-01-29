import {
    window_event_object,
    zoom_keys,
    x_move_event,
    y_move_event,
    
    fragment as fragment,

    edit_contexts,
    node_text,

    selection_groups,
    messages,
    clipboard,

    cursors,
    selection_blocks,
    rows,
    tokens,
    inputs,
    arrays,
    range,
} from '../../../conf/i.js';

import states from '../../../state/*.js';

import {
    state_style as S,
    state_alloc as A,
    state_app,
    state_mode,
} from '../../../state/i.js';
import {
    number_clamp,
    ctrl_key,
    
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,

    zoom,
    template_clone,

    scroll_x,
    scroll_y,

    init_cursors,
    selection_empty_value,
    cursor_blur,
    cursor_focus,
} from '../../../f/i.js';
import {
    html_style,
    list,
    
    scrollbar_x,
    scrollbar_y,

    scrollbar_thumb_x,
    scrollbar_thumb_y,

    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,

    text_width_container,
} from '../../../elems/i.js';
import {on_window_resize} from "../../resize/i.js";

import {
    on_scrollbar_thumb_mousemove,

    on_thumb_mousemove_x,
    on_thumb_mousemove_y,
} from '../../mouse/i.js';

var
    key = (key) => (e, e_key) => (e_key === key),

    key_home = key("Home"),
    key_end = key("End"),

    key_c = key("c"),

    key_space = key(" "),

    key_arrow_up = key("ArrowUp"),
    key_arrow_left = key("ArrowLeft"),
    key_arrow_right = key("ArrowRight"),
    key_arrow_down = key("ArrowDown"),

    key_page_up = key("PageUp"),
    key_page_down = key("PageDown"),
    key_G = key("G"),
    key_k = key("k"),
    key_j = key("j"),
    key_h = key("h"),
    key_l = key("l"),

    key_gg = (
        (e, e_key, _) => {
            return (
                (e_key === "g")
                &&
                (_.state_app.last_key === "g")
            )
        }
    ),

    key_equal = key("="),
    key_minus = key("-"),
    key_zero = key("0"),

    key_plus = key("+"),
    key_underscore = key("_"),
    key_closing_parenthesis = key(")"),
    
    key_shift = (e => e.shiftKey)
;



[
    on_key_ctrl_home,
    on_key_ctrl_end,
    on_key_ctrl_c,

    on_zoom_in,
    on_zoom_out,
    on_zoom_default,

    on_zoom_down,
    on_zoom_up,
    on_zoom_default,

    on_page_up,
    on_page_up,

    on_page_left,
    on_page_left,

    on_page_right,
    on_page_right,

    on_page_down,

    on_scroll_down,

    on_page_down,
    on_page_down,

    on_page_up,

    on_row_up,
    on_row_up,

    on_row_down,
    on_row_down,

    on_symbol_left,
    on_symbol_left,

    on_symbol_right,
    on_symbol_right,

    on_scroll_left,
    on_scroll_right,

    on_scroll_up,
]

[
    ctrl_key, key_home,
    ctrl_key, key_end,
    ctrl_key, key_c,

    ctrl_key, key_equal,
    ctrl_key, key_minus,
    ctrl_key, key_zero,

    ctrl_key, key_shift, key_plus,
    ctrl_key, key_shift, key_underscore,
    ctrl_key, key_shift, key_closing_parenthesis,

    key_shift, key_space,
    key_shift, key_arrow_up,

    key_shift, key_page_up,
    key_shift, key_arrow_left,

    key_shift, key_page_down,
    key_shift, key_arrow_right,

    key_shift, key_arrow_down,

    key_shift, key_G,
    
    key_space,
    key_page_down,
    
    key_page_up,

    key_arrow_up,
    key_k,

    key_arrow_down,
    key_j,

    key_arrow_left,
    key_h,

    key_arrow_right,
    key_l,

    key_home,
    key_end,

    key_gg,
];

export default (
    (e) => {
        var
            key = e.key,

            i = 0,
            l = 0
        ;
        
        e.preventDefault();
        e.stopPropagation();
        
        state_app.last_key = key;
    }
);
