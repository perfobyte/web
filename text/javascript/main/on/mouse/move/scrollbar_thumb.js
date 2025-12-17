import scroll_template from './scroll_template.js';
import {
    list,
    scrollbar_x,
    scrollbar_y,
    
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
} from '../../../elems/i.js';
import {
    style_state,
} from '../../../state/i.js';
import {
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
    set_scroll,
    
    get_scale_x,
    get_scale_y,
} from '../../../f/i.js';


import {
    get_scroll_size_x,
    get_scroll_size_y,
    
    set_list_scroll_x,
    set_list_scroll_y,
} from '../../../f/scroll/i.js';


export default [
    scroll_template(
        (e, style_state) => {
            return (
                style_state
                .thumb_x_translate = (
                    Math.max(
                        0,
                        Math.min(
                            ((style_state).scroll_size_x),
                            ((style_state).thumb_x_translate + e.movementX)
                        )
                    )
                )
            )
        },
        get_scroll_size_x,

        set_list_scroll_x,

        scrollbar_x,
        scrollbar_thumb_x_style,

        (style_state) => (style_state.loaded_width),
        scrollbar_thumb_x_transform,
        get_scale_x,
    ),
    scroll_template(
        list,
        style_state,

        (e, style_state) => {
            return (
                style_state
                .thumb_y_translate = (
                    Math.max(
                        0,
                        Math.min(
                            ((style_state).scroll_size_y),
                            ((style_state).thumb_y_translate + e.movementY)
                        )
                    )
                )
            )
        },
        get_scroll_size_y,

        set_list_scroll_y,

        scrollbar_y,
        scrollbar_thumb_y_style,

        (style_state) => (style_state.loaded_height),
        scrollbar_thumb_y_transform,
        get_scale_y,
    )
];
