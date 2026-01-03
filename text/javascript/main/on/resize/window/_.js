
import {
    messages_fragment,
    messages_range,
} from '../../../conf/i.js';

import {
    state_style as S,
    state_mode,
    state_alloc,
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

            width_list = (S.width_list = (width - S.left_list - S.right_list)),
            height_list = (S.height_list = (height - S.top_list - S.bottom_list)),

            row_width_mode = state_mode.width_row,

            width_scrollbar_x = (
                width
                - S.left_scrollbar_x
                - S.right_scrollbar_x
            ),
            height_scrollbar_y = (
                height
                - S.top_scrollbar_y
                - S.bottom_scrollbar_y
            )
        ;

        html_style.setProperty("--width-list", `${width_list}px`);
        html_style.setProperty("--height-list", `${height_list}px`);

        S.width_list_neg = -width_list;
        S.height_list_neg = -height_list;
        
        (
            template_cb[
                row_width_mode
            ]
        )(
            width,
            height,

            width_list,
            height_list,

            width_scrollbar_x,
            height_scrollbar_y,
        );
    }
);