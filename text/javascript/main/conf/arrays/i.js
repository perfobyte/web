export {default as hotkeys} from './hotkeys/i.js';


import {state_alloc as A} from '../../state/i.js';
import {EditContext} from "../polyfill/i.js";

import {
    array,
    alloc_new,
    reduce_instance,

    Selection,
    SelectionGroup,
    Block,
    Message,
    Chat,
    BufferStr,
    Row,
    Token,
    SelectionBlock,
    Cursor,
    Input,
    Textarea,
} from '../../f/i.js';

var
    CursorProto = Cursor.prototype
;

export var
    tokens = array(A.size_tokens, 0, Token.prototype.default, Token, Array),

    cursors = (
        (CursorProto.setup_token = tokens[0]),
        array(A.size_cursors, 0, CursorProto.default, Cursor, Array)
    ),

    selections = array(A.size_selections, 0, Selection.prototype.default, Selection, Array),

    selection_groups =
        array(A.size_selection_groups, 0, SelectionGroup.prototype.default, SelectionGroup, Array),
    
    blocks = array(A.number_blocks, 0, Block.prototype.default, Block, Array),
    messages = array(A.size_messages, 0, Message.prototype.default, Message, Array),
    chats = array(A.size_chats, 0, Chat.prototype.default, Chat, Array),

    buffers_str = array(A.size_buffers, 0, BufferStr.prototype.default, BufferStr, Array),

    rows = array(A.size_rows, 0, Row.prototype.default, Row, Array),
    

    selection_blocks = (
        array(
            A.size_selection_blocks,
            0,
            SelectionBlock.prototype.default,
            SelectionBlock,
            Array
        )
    ),
    
    inputs = array(A.size_inputs, 0, Input.prototype.default, Input, Array),
    textareas = array(A.size_textareas, 0, Textarea.prototype.default, Textarea, Array),


    edit_contexts = Array(inputs.length + textareas.length)
;

edit_contexts.reduce(reduce_instance, EditContext);
