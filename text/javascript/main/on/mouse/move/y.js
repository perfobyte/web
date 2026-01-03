import {
    state_style as S,
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
            scroll_content_size = S.height_scrollbar_content,
            content_size = S.height_scroll_content,

            max = Math.max,

            scrolled = (
                S.translate_thumb_y = 
                    number_clamp(
                        ((S.translate_thumb_y) + (e.movementY)),
                        0,
                        scroll_content_size,
                        Math.min,
                        max,
                    )
            ),

            ratio = (scrolled / scroll_content_size),

            top = (ratio * content_size),

            px = 0,

            top_content = S.top_content
        ;

        scrollbar_thumb_y_style
        .transform =
            scrollbar_thumb_y_transform(scrolled, S.scale_thumb_y);
        
        list.scrollTop = top;

        S.lines_x = (top - top_content) / S.height_row;
    }
);
