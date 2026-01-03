import {
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    list,

    content_style,

    html_style,
} from '../../../../elems/i.js';

import {
    state_style as S,
} from '../../../../state/i.js';

import {
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
} from '../../../../f/i.js';


export default (
    (
        width,
        height,

        width_list,
        height_list,
        
        width_scrollbar_x,
        height_scrollbar_y,
    ) => {
        var
            height_row = S.height_row,
            
            width_content = (S.width_content),
            height_content = (
                (S.top_content)
                + (S.height_loaded)
                + (
                    S.bottom_content = (
                        height_list - height_row
                    )
                )
            ),

            scale_x = Math.min(1, (width_list / (width_content))),
            scale_y = Math.min(1, (height_list / (height_content))),

            move_x = S.translate_thumb_x,
            move_y = S.translate_thumb_y,

            thumb_x_width = (width_scrollbar_x * scale_x),
            thumb_y_height = (height_scrollbar_y * scale_y),

            excess_x = ((move_x + thumb_x_width) - width_scrollbar_x),
            excess_y = ((move_y + thumb_y_height) - height_scrollbar_y)
        ;

        S.width_scroll_content = Math.max(0,(width_content - width_list));
        S.height_scroll_content = Math.max(0,(height_content - height_list));

        S.width_scrollbar_x = width_scrollbar_x;
        S.height_scrollbar_y = height_scrollbar_y;
        
        S.width_scrollbar_content = (width_scrollbar_x - thumb_x_width);
        S.height_scrollbar_content = (height_scrollbar_y - thumb_y_height);
        
        html_style.setProperty(
            "--height-content",
            `${S.height_content = height_content}px`
        );
        
        scrollbar_thumb_x_style
        .transform = (
            scrollbar_thumb_x_transform(
                ((excess_x) > 0)
                ? (S.translate_thumb_x -= excess_x)
                : (move_x),
                
                (S.scale_thumb_x = (scale_x))
            )
        );
        
        scrollbar_thumb_y_style
        .transform = (
            scrollbar_thumb_y_transform(
                ((excess_y) > 0)
                ? (S.translate_thumb_y -= excess_y)
                : (move_y),

                (S.scale_thumb_y = (scale_y))
            )
        );

        
    }
);
