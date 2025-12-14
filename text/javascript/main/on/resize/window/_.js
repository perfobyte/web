
import {
    messages_fragment,
    messages_range,
} from '../../../conf/i.js';

import {style_state,mode_state,alloc_state,} from "../../../state/i.js";
import {
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    list,
    MESSAGE_ROW_EL,
    text_width_container,
    elements,
} from '../../../elems/i.js';
import {
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,

    calc_list_width,
    calc_list_height,

    dom_text_width,

    append_child,
    get_null,
    edit,
    
    expand_nodes,
    render_element,
    
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
            
            prev_list_width = style_state.list_width,
            prev_list_height = style_state.list_height,

            row_width_mode = mode_state.row_width
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
                list_width,
                list_height,
            )
        );
    }
);
