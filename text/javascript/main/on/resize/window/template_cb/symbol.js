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
    edit,
    expand_nodes,
    render_element,
    is_separation,
    string_offset_change,
} from '../../../../f/i.js';

export default (
    (
        list_width,
        list_height,
    ) => {
        var
            list_scroll_height = list.scrollHeight,
            row_height = style_state.row_height,

            rows = list.children,
            row_l = rows.length,

            edit_rows = edit[0][0][0],

            blocks = alloc_state.blocks,

            messages = alloc_state.messages,

            i = 0,
            l = alloc_state.number_blocks,

            used = alloc_state.offset_messages,

            chat_messages = null,

            row_width_mode = mode_state.row_width
        ;

        edit_rows(
            alloc_state.string_block,
            alloc_state.buffer_messages_view,

            0,
            alloc_state.length_messages,
            alloc_state.size_message,

            alloc_state.offset_loaded_elements,
            alloc_state.length_loaded_elements,

            expand_nodes,
            render_element,

            is_separation[row_width_mode],
            string_offset_change[row_width_mode]
        );
        
        return (
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
