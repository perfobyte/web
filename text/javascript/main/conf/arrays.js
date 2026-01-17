import {state_alloc as A} from '../state/i.js';

export var
    edit_contexts = Array(A.size_inputs).fill(null),
    selections = Array(A.size_selections).fill(null),
    selection_groups = Array(A.size_selection_groups).fill(null),
    blocks = Array(A.number_blocks).fill(null),
    messages = Array(A.size_messages).fill(null),
    chats = Array(A.size_chats).fill(null),

    buffers = Array(A.size_buffers).fill(""),

    rows = Array(A.size_rows).fill(null),
    tokens = Array(A.size_tokens).fill(null),
    selection_blocks = Array(A.size_selection_blocks).fill(null),
    cursors = Array(A.size_cursors).fill(null),
    inputs = Array(A.size_inputs).fill(null),
    textareas = Array(A.size_textareas).fill(null)
;