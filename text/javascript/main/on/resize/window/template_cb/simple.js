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
        list_width,
        list_height,
    ) => {
        var
            min = Math.min,
            list_scroll_width = list.scrollWidth,
            list_scroll_height = list.scrollHeight,

            i = 0,
            children = list.children,

            row_height = style_state.row_height,
            l = children.length
        ;

        while(i<l) {
            children[i].style.top = `${row_height*i}px`;

            i++;
        };

        return (
            (
                scrollbar_thumb_x_style
                .transform = (
                    scrollbar_thumb_x_transform(
                        style_state.thumb_x_translate,
                        (
                            style_state
                            .thumb_x_scale = (
                                min(
                                    1,
                                    (
                                        list_width
                                        / list_scroll_width
                                    )
                                )
                            )
                        )
                    )
                )
            ),

            (
                scrollbar_thumb_y_style
                .transform = (
                    scrollbar_thumb_y_transform(
                        style_state.thumb_y_translate,
                        
                        (
                            style_state
                            .thumb_y_scale = (
                                min(
                                    1,
                                    (
                                        list_height
                                        / list_scroll_height
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
);
