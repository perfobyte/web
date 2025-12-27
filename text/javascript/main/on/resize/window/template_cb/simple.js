import {
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
    list,
} from '../../../../elems/i.js';

import {
    style_state
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
        
        thumb_x_size,
        thumb_y_size,
    ) => {
        var
            min = Math.min,
            max = Math.max,

            scale_x = (
                min(
                    1,
                    (
                        list_width
                        / (style_state.loaded_width)
                    )
                )
            ),

            scale_y = (
                min(
                    1,
                    (
                        list_height
                        / (style_state.content_height)
                    )
                )
            ),

            move_x = style_state.thumb_x_translate,
            move_y = style_state.thumb_y_translate,

            excess_x = ((move_x + (thumb_x_size * scale_x)) - thumb_x_size),
            excess_y = ((move_y + (thumb_y_size * scale_y)) - thumb_y_size),

            row_height = style_state.row_height
        ;
            
        return void (
            (
                scrollbar_thumb_x_style
                .transform = (
                    scrollbar_thumb_x_transform(
                        (
                            ((style_state.excess_x = excess_x) > 0)
                            ? ((style_state.excess_x = excess_x),style_state.thumb_x_translate -= excess_x)
                            : ((style_state.excess_x = 0),move_x)
                        ),
                        (style_state.thumb_x_scale = (scale_x))
                    )
                )
            ),

            (
                scrollbar_thumb_y_style
                .transform = (
                    scrollbar_thumb_y_transform(
                        (
                            ((excess_y) > 0)
                            ? ((style_state.excess_y = excess_y),(style_state.thumb_y_translate -= excess_y))
                            : ((style_state.excess_y = 0),move_y)
                        ),
                        (style_state.thumb_y_scale = (scale_y))
                    )
                )
            )
        );
    }
);
