import {
    style_state as S,
} from '../../../state/i.js';

import {
    list,
    scrollbar_thumb_x_style,
} from '../../../elems/i.js';

import {
    number_clamp,
    scrollbar_thumb_x_transform,
} from '../../../f/i.js';

export default (
    (e) => {
        var
            scroll_content_size = S.scrollbar_content_width,
            content_size = S.scroll_content_width,

            max = Math.max,
            scrolled = (
                S.thumb_x_translate = 
                    number_clamp(
                        ((S.thumb_x_translate) + (e.movementX)),
                        0,
                        scroll_content_size,
                        Math.min,
                        max,
                    )
            ),

            ratio = (scrolled / scroll_content_size),

            left = (ratio * content_size),

            content_left = S.content_left
        ;

        scrollbar_thumb_x_style
        .transform =
            scrollbar_thumb_x_transform(scrolled, S.thumb_x_scale);
        
        list.scrollLeft = left;
        
        S.scroll_left_lines = (left - content_left) / S.row_height;
    }
);
