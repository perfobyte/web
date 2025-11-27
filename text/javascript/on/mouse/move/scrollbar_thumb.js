import scroll_template from './scroll_template.js';
import {
    list,
    scrollbar_x,
    scrollbar_y,
    scrollbar_thumb_x,
    scrollbar_thumb_y,

} from '../../../elems/i.js';
import {style_state, chat_state} from '../../../state/i.js';
import {
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
} from '../../../f/i.js';



export default [
    scroll_template(
        list,
        style_state,

        (e, style_state, window, thumb, scrollbar) => {
            var
                prev = style_state.thumb_x_translate,
                new_value = (prev + e.movementX),

                w = scrollbar.offsetWidth,
                thumb_w = (w * style_state.thumb_x_scale)
            ;
            return (
                style_state
                .thumb_x_translate =
                    
                    Math.max(
                        0,
                        Math.min(
                            (w - thumb_w),
                            new_value
                        )
                    )
            )
        },
        (scrollbar) => (scrollbar.offsetWidth),

        (list, new_value) => (list.scrollLeft = new_value),

        scrollbar_x,
        scrollbar_thumb_x,

        (list) => list.scrollWidth,
        scrollbar_thumb_x_transform,
        (style_state) => style_state.thumb_x_scale,
    ),
    scroll_template(
        list,
        style_state,

        (e,style_state,window, thumb, scrollbar) => {
            var
                prev = style_state.thumb_y_translate,
                new_value = (prev + e.movementY),

                h = scrollbar.offsetHeight,
                thumb_h = (h * style_state.thumb_y_scale)
            ;
            return (
                style_state
                .thumb_y_translate =
                    Math.max(
                        0,
                        Math.min(
                            (h - thumb_h),
                            new_value,
                        )
                    )
            )
        },
        (scrollbar) => (scrollbar.offsetHeight),

        (list, new_value) => (list.scrollTop = new_value),

        scrollbar_y,
        scrollbar_thumb_y,

        (list) => list.scrollHeight,
        scrollbar_thumb_y_transform,
        (style_state) => style_state.thumb_y_scale,
    )
];
