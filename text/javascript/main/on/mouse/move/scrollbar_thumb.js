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
    set_list_scroll_x,
    set_list_scroll_y,
    get_scale_x,
    get_scale_y,
    
    get_offset_size_x,
    get_offset_size_y,

    get_scroll_size_x,
    get_scroll_size_y,
} from '../../../f/i.js';

export default [
    scroll_template(
        list,
        style_state,

        (e, style_state, window, scrollbar) => {
            var
                prev = style_state.thumb_x_translate,
                new_value = (prev + e.movementX),

                w = scrollbar.offsetWidth,
                thumb_w = (w * style_state.thumb_x_scale)
            ;
            return (
                style_state
                .thumb_x_translate = (
                    Math.max(
                        0,
                        Math.min(
                            (w - thumb_w),
                            new_value
                        )
                    )
                )
            )
        },
        get_offset_size_x,

        set_list_scroll_x,

        scrollbar_x,
        scrollbar_thumb_x_style,

        get_scroll_size_x,
        scrollbar_thumb_x_transform,
        get_scale_x,

        set_scroll,
    ),
    scroll_template(
        list,
        style_state,

        (e,style_state,window,scrollbar) => {
            var
                prev = style_state.thumb_y_translate,
                new_value = (prev + e.movementY),

                h = scrollbar.offsetHeight,
                thumb_h = (h * style_state.thumb_y_scale)
            ;
            return (
                style_state
                .thumb_y_translate = (
                    Math.max(
                        0,
                        Math.min(
                            (h - thumb_h),
                            new_value,
                        )
                    )
                )
            )
        },
        get_offset_size_y,

        set_list_scroll_y,

        scrollbar_y,
        scrollbar_thumb_y_style,

        get_scroll_size_y,
        scrollbar_thumb_y_transform,
        get_scale_y,

        set_scroll,
    )
];
