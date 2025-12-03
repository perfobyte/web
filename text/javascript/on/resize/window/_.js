
import {
    messages_fragment,
    messages_range,
} from '../../../conf/i.js';

import {style_state, chat_state,} from "../../../state/i.js";
import {
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    list,
    MESSAGE_ROW_EL,
    text_width_container,
} from '../../../elems/i.js';
import {
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,

    calc_list_width,
    calc_list_height,

    recalc_rows_increased_width,
    recalc_rows_decreased_width,

    dom_text_width,

    message_append,
    messages_push,

    message_to_html,

    append_child,
    get_null,
} from '../../../f/i.js';

import template_cb from './template_cb/i.js';


export default (
    (e) => {
        var
            window = e.currentTarget,
            html_style = window.document.documentElement.style,

            width = window.innerWidth,
            height = window.innerHeight,

            row_height = style_state.row_height,

            list_width = 0,
            list_height = 0,

            list_scroll_width = list.scrollWidth,
            list_scroll_height = list.scrollHeight,

            prev_list_width = style_state.list_width,
            prev_list_height = style_state.list_height,

            row_width_mode = style_state.row_width_mode
        ;
        return void (
            html_style.setProperty("--width",`${width}px`),
            html_style.setProperty("--height",`${height}px`),

            html_style.setProperty(
                "--list-width",
                `${
                    list_width = (
                        calc_list_width(
                            width,
                            style_state.list_left,
                            style_state.list_right
                        )
                    )
                }px`
            ),

            html_style.setProperty(
                "--list-height",
                `${
                    list_height = (
                        calc_list_height(
                            height,
                            style_state.list_top,
                            style_state.list_bottom,
                        )
                    )
                }px`
            ),

            (
                template_cb[
                    row_width_mode
                ]
            )(
                scrollbar_thumb_x_style,
                scrollbar_thumb_y_style,

                scrollbar_thumb_x_transform,
                scrollbar_thumb_y_transform,

                style_state,
                chat_state,
                
                list,
                messages_fragment,
                messages_range,

                Math.min,

                list_width,
                list_height,

                list_scroll_width,
                list_scroll_height,

                prev_list_width,
                prev_list_height,

                recalc_rows_increased_width,
                recalc_rows_decreased_width,

                MESSAGE_ROW_EL,
                text_width_container,
                dom_text_width,
                message_append[row_width_mode],
                messages_push,

                message_to_html,

                append_child,
                get_null,
            )
        );
    }
);
