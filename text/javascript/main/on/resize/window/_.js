
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

    get_null,
    edit,
    
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

            list_width = 0,
            list_height = 0,

            row_width_mode = mode_state.row_width,

            thumb_x_size = 0,
            thumb_y_size = 0,

            list_top = style_state.list_top
        ;
        return void (
            html_style.setProperty("--width",`${width}px`),
            html_style.setProperty("--height",`${height}px`),

            (style_state.thumb_x_size = (
                thumb_x_size = (
                    width
                    - style_state.thumb_x_left
                    - style_state.thumb_x_right
                )
            )),
            (style_state.thumb_y_size = (
                thumb_y_size = (
                    height
                    - style_state.thumb_y_top
                    - style_state.thumb_y_bottom
                )
            )),
            
            html_style.setProperty(
                "--list-width",
                `${
                    style_state.list_width =
                    list_width = (
                        width
                        - style_state.list_left
                        - style_state.list_right
                    )
                }px`
            ),

            html_style.setProperty(
                "--list-height",
                `${
                    style_state.list_height =
                    list_height = (
                        height
                        - list_top
                        - style_state.list_bottom
                    )
                }px`
            ),
            
            (
                template_cb[
                    row_width_mode
                ]
            )(
                width,
                height,

                list_width,
                list_height,

                thumb_x_size,
                thumb_y_size,
            )
        );
    }
);
