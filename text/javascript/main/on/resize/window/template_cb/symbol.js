import {
    scrollbar_thumb_y_style,
    list,
    ROW_EL,
} from '../../../../elems/i.js';

import {
    fragment,
    range,
    tokens,
} from '../../../../conf/i.js';

import {
    state_style,
    state_alloc,
    state_mode,
} from '../../../../state/i.js';

import {
    scrollbar_thumb_y_transform,
} from '../../../../f/i.js';

export default (
    (
        width,
        height,
        
        width_list,
        height_list,

        thumb_x_size,
        thumb_y_size,
    ) => {
        var
            list_scroll_height = 0,
            height_row = state_style.height_row,

            rows = list.children,
            row_l = rows.length,

            edit_rows = null,//edit[0][0][0],

            blocks = state_alloc.blocks,

            i = 0,
            l = state_alloc.number_blocks,

            used = state_alloc.offset_messages,

            chat_messages = null,

            row_width_mode = state_mode.width_row,

            size_x = 0,
            size_y = 0,

            size_message = state_alloc.size_message
        ;

        edit_rows(
            state_alloc.blocks,
            state_alloc.buffer_messages_view,

            0,
            state_alloc.length_messages * size_message,
            size_message,

            0,
            state_alloc.length_tokens,
        );

        list_scroll_height = state_style.height_content;
        content_style.height = `${list_scroll_height}px`;
        
        // content_style.width = `${
        //     size_x = (
        //         state_style.width_content
        //         + state_style.extra_scroll_width
        //     )
        // }px`;

        // content_style.height = `${
        //     size_y = (
        //         state_style.height_content
        //         + state_style.extra_scroll_height
        //     )
        // }px`;
        
        return void (
            (
                scrollbar_thumb_y_style
                .transform = (
                    scrollbar_thumb_y_transform(
                        state_style.translate_thumb_y,
                        
                        (
                            state_style
                            .scale_thumb_y = (
                                Math.min(
                                    1,
                                    (
                                        height_list
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
