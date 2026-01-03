import {
    state_style as S,
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
            scroll_content_size = S.width_scrollbar_content,
            content_size = S.width_scroll_content,

            max = Math.max,
            scrolled = (
                S.translate_thumb_x = 
                    number_clamp(
                        ((S.translate_thumb_x) + (e.movementX)),
                        0,
                        scroll_content_size,
                        Math.min,
                        max,
                    )
            ),

            ratio = (scrolled / scroll_content_size),

            left = (ratio * content_size),

            left_content = S.left_content
        ;

        scrollbar_thumb_x_style
        .transform =
            scrollbar_thumb_x_transform(scrolled, S.scale_thumb_x);
        
        list.scrollLeft = left;
        
        S.lines_y = (left - left_content) / S.height_row;
    }
);
