import {
    scrollbar_thumb_y_style,
    list,
    MESSAGE_ROW_EL,
    elements,
} from '../../../../elems/i.js';

import {
    messages_fragment,
    messages_range,
} from '../../../../conf/i.js';

import {
    style_state,
    alloc_state,
    mode_state,
} from '../../../../state/i.js';

import {
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
            list_scroll_height = 0,
            row_height = style_state.row_height,

            rows = list.children,
            row_l = rows.length,

            edit_rows = null,//edit[0][0][0],

            blocks = alloc_state.blocks,

            i = 0,
            l = alloc_state.number_blocks,

            used = alloc_state.offset_messages,

            chat_messages = null,

            row_width_mode = mode_state.row_width,

            size_x = 0,
            size_y = 0,

            size_message = alloc_state.size_message
        ;

        edit_rows(
            alloc_state.blocks,
            alloc_state.buffer_messages_view,

            0,
            alloc_state.length_messages * size_message,
            size_message,

            0,
            alloc_state.length_loaded_elements,
        );

        list_scroll_height = style_state.content_height;
        content_style.height = `${list_scroll_height}px`;
        
        // content_style.width = `${
        //     size_x = (
        //         style_state.content_width
        //         + style_state.extra_scroll_width
        //     )
        // }px`;

        // content_style.height = `${
        //     size_y = (
        //         style_state.content_height
        //         + style_state.extra_scroll_height
        //     )
        // }px`;
        
        return void (
            (
                scrollbar_thumb_y_style
                .transform = (
                    scrollbar_thumb_y_transform(
                        style_state.thumb_y_translate,
                        
                        (
                            style_state
                            .thumb_y_scale = (
                                Math.min(
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
