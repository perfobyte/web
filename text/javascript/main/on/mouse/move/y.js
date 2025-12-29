import {
    style_state as S,
} from '../../../state/i.js';

import {
    list,
    scrollbar_thumb_y_style,
} from '../../../elems/i.js';

import {
    number_clamp,
    scrollbar_thumb_y_transform,
} from '../../../f/i.js';

export default (
    (e) => {
        var
            scroll_content_size = S.scrollbar_content_height,
            content_size = S.scroll_content_height,

            max = Math.max,

            scrolled = (
                S.thumb_y_translate = 
                    number_clamp(
                        ((S.thumb_y_translate) + (e.movementY)),
                        0,
                        scroll_content_size,
                        Math.min,
                        max,
                    )
            ),

            ratio = (scrolled / scroll_content_size),

            top = (ratio * content_size),

            px = 0,

            content_top = S.content_top
        ;

        scrollbar_thumb_y_style
        .transform =
            scrollbar_thumb_y_transform(scrolled, S.thumb_y_scale);
        
        S.scrollTop = (list.scrollTop = top);

        S.scroll_top_lines = (top - content_top) / S.row_height;
    }
);
