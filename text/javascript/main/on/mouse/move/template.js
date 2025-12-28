import {
    style_state,
} from '../../../state/i.js';

import {
    number_clamp,
} from '../../../f/i.js';

import {
    list
} from '../../../elems/i.js';


export default (
    (
        scrollbar_thumb_style,

        key_thumb_translate,
        key_movement,

        key_scroll_content_size,
        key_content_size,

        key_scale,
        key_list_scroll,

        scrollbar_thumb_transform,
    ) =>
    
    (e) => {
        var
            scroll_content_size = (style_state)[key_scroll_content_size],
            content_size = (style_state)[key_content_size],

            scrolled = (
                style_state[key_thumb_translate] = 
                    number_clamp(
                        (((style_state)[key_thumb_translate]) + (e[key_movement])),
                        0,
                        scroll_content_size,
                        Math.min,
                        Math.max,
                    )
            ),

            ratio = (scrolled / scroll_content_size),

            list_scroll = (ratio * content_size)
        ;
        console.log(ratio);
        
        return void (
            (
                scrollbar_thumb_style
                .transform = (
                    scrollbar_thumb_transform(
                        scrolled,
                        style_state[key_scale]
                    )
                )
            ),

            (list[key_list_scroll] = list_scroll)
        );
    }
);
