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
    selection_groups,

    blocks,
    messages,chats,
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

    default_row_inline_class,

    tokens,
    rows,
    
    cursors,
    inputs,
    textareas,
    
    main,
    list_selections,
    list_cursors,
    list_inputs,
    list_textareas,

    selection_blocks,
    
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
                        
                        i = 0,
                        l = cursors.length,

                        cursor = n,
                        c_el = n,

                        input_el = n,
                        textarea_el = n,

                        sel_el = n,
                        block = n,
                        message = n,
                        chat = n,

                        tabindex = 1,
                        
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
                        
                        ObjectAssign = Object.assign
                    ;

                    i = 0;
                    l = chats.length;
                    for(;i<l;i++){
                        chats[i] = ChatDefault(Chat, BigInt(i))
                    };
                    chat = chats[0];
                    A.length_chats = 1;

                    i = 0;
                    l = blocks.length;
                    BlockProto.size = A.size_block;

                    for(;i<l;i++){
                        blocks[i] = BlockDefault(Block, i);
                    };
                    
                    block = blocks[0];
                    block.value = "hello_my_friend\nhow are u bro\n i havent seen u a long time agosdfldsfkdsfksdfksdfsdf\\cwaitaaaa\naaaaai havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdfi havent seen u a long time agosdfldsfkdsfksdfksdfsdf11\n2\n3\n4\n3553345435345345345534534\nx312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123x312x1e1ex1e1ex3e123x123\nhello/world//////";
                    block.offset = 0;

                    i = 0;
                    l = messages.length;
                    for(;i<l;i++){
                        messages[i] = MessageDefault(Message, i, BigInt(i));
                    };
                    
                    i = 0;
                    l = test_messages.length;
                    for(;i<l;i++){
                        message = messages[i];
                        ObjectAssign(message, test_messages[i]);
                        message.block = block;
                        message.chat = chat;
                    };
                    
                    A.length_messages = l;
                    

                    i = 0;
                    l = tokens.length;
                    for(;i<l;i++){
                        tokens[i] = TokenDefault(Token, i, TOKEN_EL.cloneNode(true));
                    };
                    
                    i = 0;
                    l = rows.length;
                    for(;i<l;i++){
                        rows[i] = RowDefault(Row, i, ROW_EL.cloneNode(true));
                    };

                    load_msgs(
                        default_row_inline_class,
                        
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

                    i = 0;
                    l = cursors.length;

                    for(;i < l; i++) {
                        c_el = CURSOR_EL.cloneNode(true);
                        c_el.classList.add("hidden");
                        fragment.appendChild(c_el);

                        cursor = CursorDefault(Cursor,i,c_el)
                        cursors[i] = cursor;
                    };

                    cursor = main.cursor = cursors[main.id_cursor];
                    
                    //
                    cursor.token = tokens[1];
                    cursor.token_start = 4;

                    c_el = main.element_cursor = cursor.element;
                    main.element_cursor_classlist = c_el.classList;

                    list_cursors.appendChild(fragment);

                    init_cursors(
                        cursors,
                        tokens,
                        selection_groups,
                        selection_blocks,

                        text_width_container,
                        node_text,
                        S.width_cursor,
                        S.zoom,
                    );

                    i = 0;
                    l = inputs.length;
                    for (;i < l; i++) {
                        input_el = REGULAR_INPUT_EL.cloneNode(true);
                        inputs[i] = InputDefault(Input, i, input_el);

                        input_el.setAttribute("tabindex", tabindex++);
                        
                        input_el.onfocus = on_input_focus;
                        input_el.onblur = on_input_blur;
                        input_el.onbeforeinput = on_regular_input_beforeinput;

                        fragment.appendChild(input_el);
                    }
                    
                    main.input = inputs[main.id_input];
                    list_inputs.appendChild(fragment);

                    i = 0;
                    l = textareas.length;

                    for (;i < l; i++) {
                        textarea_el = REGULAR_TEXTAREA_EL.cloneNode(true);
                        textarea_el.setAttribute("tabindex", tabindex++);

                        textareas[i] = TextareaDefault(Textarea, i, textarea_el);

                        fragment.appendChild(textarea_el);
                    };

                    main.element_textarea = textareas[main.id_textarea];
                    list_textareas.appendChild(fragment);

                    i = 0;
                    l = edit_contexts.length;
                    for (;i < l;i++) {
                        input_el = inputs[i].element;

                        edit_contexts[i] = new EditContext();
                    };
                    
                    
                    i = 0;
                    l = selection_groups.length;
                    for (;i<l;i++) {
                        selection_groups[i] = SelectionGroupDefault(SelectionGroup, i);
                    }
                    
                    i = 0;
                    l = selection_blocks.length;

                    for (; i < l; i++) {
                        sel_el = SELECTION_EL.cloneNode(true);
                        selection_blocks[i] = SelectionBlockDefault(SelectionBlock, i, sel_el);
                    };

                    i = 0;
                    l = selections.length;
                    for (; i < l; i++) {
                        selections[i] = SelectionDefault(Selection,i);
                    };
                    
                    list.scrollLeft =
                    list.scrollTop =
                        0;

                    //
                    list_selections.replaceChildren(selection_blocks[0].element);
                    
                    body_cl.remove('hidden');
                }
            )
        );
    }
)(
    window,
    document,
);
