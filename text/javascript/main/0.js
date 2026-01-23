import test_messages from './test_messages.js';

import {
    font_path,
    font_src,

    load_msgs,

    Cursor,
    Selection,
    SelectionBlock,
    SelectionGroup,
    init_cursors,

    Token,
    Row,

    Input,
    Textarea,
    Block,

    Chat,
    Message,
    BufferStr,

    setup,
    foreach,
    
    static_reduce,
    reduce_append_child,
} from './f/i.js';

import {
    window_event_object,
    passive_false,
    fragment as fragment,
    range as range,
    font_faces,
    workers,
    TD,
    TE,
    param_font,

    edit_contexts,
    EditContext,
    node_text,

    selections,
    selection_groups as sgs,

    blocks,
    messages,chats,

    tokens,
    rows,
    cursors,
    inputs,
    textareas,
    selection_blocks as sbs,
    buffers_str,

    arrays
} from "./conf/i.js";

import {
    html_style as st,
    body_cl,
    
    list,
    
    scrollbar_x,
    scrollbar_y,

    ROW_EL,
    TOKEN_EL,
    CURSOR_EL,
    REGULAR_INPUT_EL,
    REGULAR_TEXTAREA_EL,
    SELECTION_EL,

    content_style,

    text_width_container,
    content,

    default_row_inline_class as classname,
    
    list_selections,
    list_cursors,
    list_inputs,
    list_textareas,
} from "./elems/i.js";

import {
    state_style as S,
    state_alloc as A,

    support_structure_font,
    support_font,
    
    state_lang,

    state_mode,
} from './state/i.js';

import {
    on_window_resize,
    on_contextmenu,
    on_error,
    on_list_mousedown,
    on_list_selectstart,

    on_scrollbar_thumb_mousedown,
    on_list_wheel,
    on_list_mouseup,

    on_window_keydown,
    on_window_keyup,

    on_input_focus,
    
    on_input_blur,
    on_window_blur,

    on_regular_input_beforeinput,
    on_document_visibilitychange,
} from './on/i.js';

(
    (window, document) => {
        var
            n = null,

            document_fonts = document.fonts,

            height_row = S.height_row,
            font_id = S.font_id,

            font_id_bare_str = (`_${font_id}`),

            font_face = n,

            width = window.innerWidth,
            height = window.innerHeight,
            
            left_list = S.left_list,
            right_list = S.right_list,

            top_list = S.top_list,
            bottom_list = S.bottom_list,

            width_list = (S.width_list = (width - left_list - right_list)),
            height_list = (S.height_list = (height - top_list - bottom_list)),

            row_width_mode = state_mode.width_row
        ;
        
        // workers[0] = new Worker("/f/text/javascript/worker/fs/1.js");
        
        document.addEventListener("visibilitychange", on_document_visibilitychange);

        window.addEventListener("error", on_error);
        window.addEventListener("contextmenu", on_contextmenu);
        list.addEventListener("mousedown", on_list_mousedown);
        
        list.addEventListener("selectstart", on_list_selectstart);
        
        window.addEventListener("wheel", on_list_wheel, passive_false);
        window.addEventListener("keydown", (on_window_keydown));
        window.addEventListener("keyup", (on_window_keyup));
        window.addEventListener("blur", on_window_blur);

        scrollbar_y.addEventListener("mousedown", on_scrollbar_thumb_mousedown);

        if (row_width_mode === 0) {
            scrollbar_x.addEventListener("mousedown", on_scrollbar_thumb_mousedown);

            S.right_content = 100;
        }
        else if (row_width_mode === 1) {
            S.bottom_list = (bottom_list = 0);

            scrollbar_x.classList.add('none');
        };

        st.setProperty("--height-row", `${height_row}px`);
        st.setProperty("--font-size", `${S.font_size}px`);
        st.setProperty("--font-family",`"${font_id_bare_str}"`);

        st.setProperty("--top-list", `${top_list}px`);
        st.setProperty("--left-list", `${left_list}px`);
        st.setProperty("--right-list", `${right_list}px`);
        st.setProperty("--bottom-list", `${bottom_list}px`);
        
        st.setProperty("--left-scrollbar-x", `${S.left_scrollbar_x}px`);
        st.setProperty("--right-scrollbar-x", `${S.right_scrollbar_x}px`);

        st.setProperty("--top-scrollbar-y", `${S.top_scrollbar_y}px`);
        st.setProperty("--bottom-scrollbar-y", `${S.bottom_scrollbar_y}px`);
        
        font_faces[0] =
        font_face = (
            new FontFace(
                font_id_bare_str,
                font_src(
                    support_structure_font,
                    font_id,
                    0,
                    support_structure_font.length,
                    font_path,
                ),
                param_font[0]
            )
        );
        
        document_fonts.add(font_face);

        return (
            font_face
            .load()
            .then(
                () => {
                    var
                        n = null,
                        size_message = A.size_message,

                        token = n,
                        
                        i = 0,
                        l = cursors.length,

                        buffer = n,
                        cursor = n,
                        c_el = n,

                        input_el = n,
                        textarea_el = n,

                        sel_el = n,
                        block = n,
                        message = n,
                        chat = n,
                        selection = n,
                        
                        CursorDefault = Cursor.prototype.default,
                        SelectionDefault = Selection.prototype.default,
                        SelectionBlockDefault = SelectionBlock.prototype.default,
                        SelectionGroupDefault = SelectionGroup.prototype.default,
                        
                        RowDefault = Row.prototype.default,
                        TokenDefault = Token.prototype.default,

                        TextareaDefault = Textarea.prototype.default,
                        InputDefault = Input.prototype.default,

                        ChatDefault = Chat.prototype.default,
                        MessageDefault = Message.prototype.default,

                        BlockProto = Block.prototype,
                        BlockDefault = BlockProto.default,

                        BufferStrDefault = BufferStr.prototype.default,
                        
                        ObjectAssign = Object.assign,

                        tmsgs = n,
                        group = n,
                        sblock = n,
                        input = n,
                        row = n,
                        textarea = n
                    ;

                    chat = chats[0];
                    A.length_chats = 1;

                    BlockProto.index_last = ((BlockProto.size = A.size_block) - 1);

                    buffer = buffers_str[0];
                    buffer.value = "hello_my_friend\nhow are u bro\n i havent seen u a long time agosdfldsfkdsfksdfksdfsdf\\cwaitaaaa\naaaaai havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdf11\n2\n3\n4\n3553345435345345345534534\nx312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123\nhello/world//////aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\nabbbb";
                    
                    block = blocks[0];
                    block.buffer = buffer;
                    block.start = 0;
                    block.end = 4096;
                    
                    block = blocks[1];
                    block.buffer = buffer;
                    block.start = 4096;
                    block.end = 8192;

                    i = 0;
                    l = (tmsgs = test_messages(blocks)).length;
                    for(;i<l;i++){
                        message = messages[i];
                        message.chat = chat;
                        ObjectAssign(message, tmsgs[i]);
                    };
                    
                    A.length_messages = l;
                    
                    load_msgs(
                        classname,
                        
                        messages,
                        0,
                        A.length_messages,

                        tokens,
                        0,
                        A.length_tokens,

                        rows,
                        0,
                        A.length_rows,

                        ROW_EL,
                        TOKEN_EL,

                        A.size_rows,
                        A.size_tokens,
                        S.height_row,

                        A,
                        S,

                        content,
                        st,
                        fragment,
                        range,

                        text_width_container,

                        Token,
                        Row,

                        Text,
                        node_text,
                    );
                    
                    on_window_resize(window_event_object);
                    window.onresize = on_window_resize;

                    static_reduce(cursors, 0, cursors.length, fragment, reduce_append_child);
                    list_cursors.appendChild(fragment);

                    init_cursors(
                        cursors,
                        tokens,
                        sgs,
                        sbs,

                        text_width_container,
                        node_text,
                        S.width_cursor,
                        S.zoom,
                    );

                    static_reduce(inputs, 0, inputs.length, fragment, reduce_append_child);
                    list_inputs.appendChild(fragment);

                    static_reduce(textareas, 0, textareas.length, fragment, reduce_append_child);
                    list_textareas.appendChild(fragment);
                    
                    list.scrollLeft =
                    list.scrollTop =
                        0;

                    //
                    list_selections.replaceChildren(sbs[0].element);
                    
                    body_cl.remove('hidden');
                }
            )
        );
    }
)(
    window,
    document,
);

globalThis.arrays = arrays;
