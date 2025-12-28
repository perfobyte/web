import {
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    list,

    content_style,

    html_style,
} from '../../../../elems/i.js';

import {
    style_state as S,
} from '../../../../state/i.js';

import {
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
} from '../../../../f/i.js';


export default (
    (
        width,
        height,

        list_width,
        list_height,
        
        scrollbar_x_width,
        scrollbar_y_height,
    ) => {
        var
            row_height = S.row_height,
            
            content_width = (S.content_width),
            content_height = (
                (S.content_top)
                + (S.loaded_height)
                + (
                    S.content_bottom = (
                        list_height - row_height
                    )
                )
            ),

            scale_x = Math.min(1, (list_width / (content_width))),
            scale_y = Math.min(1, (list_height / (content_height))),

            move_x = S.thumb_x_translate,
            move_y = S.thumb_y_translate,

            thumb_x_width = (scrollbar_x_width * scale_x),
            thumb_y_height = (scrollbar_y_height * scale_y),

            excess_x = ((move_x + thumb_x_width) - scrollbar_x_width),
            excess_y = ((move_y + thumb_y_height) - scrollbar_y_height)
        ;
        
        S.scroll_content_width = Math.max(0,(content_width - list_width));
        S.scroll_content_height = Math.max(0,(content_height - list_height));

        S.scrollbar_content_width = (scrollbar_x_width - thumb_x_width);
        S.scrollbar_content_height = (scrollbar_y_height - thumb_y_height);

        html_style.setProperty(
            "--content-height",
            `${S.content_height = content_height}px`
        );
        
        scrollbar_thumb_x_style
        .transform = (
            scrollbar_thumb_x_transform(
                ((excess_x) > 0)
                ? (S.thumb_x_translate -= excess_x)
                : (move_x),
                
                (S.thumb_x_scale = (scale_x))
            )
        );
        
        scrollbar_thumb_y_style
        .transform = (
            scrollbar_thumb_y_transform(
                ((excess_y) > 0)
                ? (S.thumb_y_translate -= excess_y)
                : (move_y),

                (S.thumb_y_scale = (scale_y))
            )
        );

        
    }
);
