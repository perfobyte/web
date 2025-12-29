
import {
    messages_fragment,
    messages_range,
} from '../../../conf/i.js';

import {
    style_state as S,
    mode_state,
    alloc_state,
} from "../../../state/i.js";
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
} from '../../../f/i.js';

import template_cb from './template_cb/map.js';


export default (
    (e) => {
        var
            window = e.currentTarget,
            html_style = window.document.documentElement.style,

            width = window.innerWidth,
            height = window.innerHeight,

            list_width = (S.list_width = (width - S.list_left - S.list_right)),
            list_height = (S.list_height = (height - S.list_top - S.list_bottom)),

            row_width_mode = mode_state.row_width,

            scrollbar_x_width = (
                width
                - S.scrollbar_x_left
                - S.scrollbar_x_right
            ),
            scrollbar_y_height = (
                height
                - S.scrollbar_y_top
                - S.scrollbar_y_bottom
            )
        ;

        html_style.setProperty("--list-width", `${list_width}px`);
        html_style.setProperty("--list-height", `${list_height}px`);
        
        (
            template_cb[
                row_width_mode
            ]
        )(
            width,
            height,

            list_width,
            list_height,

            scrollbar_x_width,
            scrollbar_y_height,
        );
    }
);