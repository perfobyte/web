
import {
    text_width_container as TW,
    SELECTION_EL,
    list_selections,
    list,
} from '../../../elems/i.js';
import {
    prevent_scroll,
    node_text,
    selection_groups as sgs,
    selections,

    range,
    fragment,

    tokens,
    selection_blocks as sbs,
    rows,
    cursors,
} from '../../../conf/i.js';
import {
    state_app,
    state_alloc as A,
    state_style as S,
} from '../../../state/i.js';
import {
    SelectionBlock,
    Selection,
    SelectionGroup,
    array_expand,

    foreach,
} from '../../../f/i.js';

export default (
    (e) => {
        var
            max = Math.max,
            cursor = cursors[0],
            
            window = e.currentTarget,
            document = window.document,

            i = 0,
            l = A.length_tokens,

            x = (list.scrollLeft + (e.clientX - S.left_list)),
            y = max((list.scrollTop + (e.clientY - S.top_list)), (S.top_content)),

            top = 0,
            left = 0,

            position = 0,
            elem_col = 0,
            
            style = null,
            E = null,

            sblock = null,
            group = null,

            block = null,
            next_block = null,

            selection = null,

            w = 0,

            value = "",

            char_i = 0,
            char_l = 0,
            
            prev_w = 0,
            tmp = 0,

            lo = 0,
            hi = 0,
            lo1 = 0,

            from = 0,
            to = 0,

            token = null,
            offset = 0,
            step = 0,

            SelectionBlockDefault = SelectionBlock.prototype.default,
            SelectionDefault = Selection.prototype.default,
            SelectionGroupDefault = SelectionGroup.prototype.default,

            wwt = S.width_whitespace_trailing,
            wwl = S.width_whitespace_leading
        ;
        
        if (y >= S.height_loaded_start) {
            y = tokens[i=l-1].top;
        };
        
        cycle: for(; i < l; i++) {
            E = tokens[i];
            
            left = E.left;
            top = E.top;
            position = E.position;
            block = E.block;
            value = block.buffer.value;

            if (
                (y >= top)
                &&
                (y < E.bottom)
            ) {
                found: {
                    if (x >= (left)) {
                        if (x < (E.right)) {
                            TW.replaceChildren(node_text);

                            x -= left;
                            char_i = E.start;
                            char_l = E.end;

                            lo = char_i;
                            hi = char_l;

                            while (lo < hi) {
                                tmp = (lo + hi) >> 1;
                                node_text.textContent = value.substring(char_i, tmp);
                                
                                if (TW.offsetWidth < x) {lo = tmp + 1}
                                else {hi = tmp};
                            }

                            lo1 = (lo - 1);

                            node_text.textContent = value.substring(char_i, max(char_i, lo1));
                            prev_w = TW.offsetWidth;

                            node_text.textContent = value.substring(char_i, lo);
                            tmp = TW.offsetWidth;

                            if (x < ((prev_w + tmp) / 2)) {
                                elem_col = (lo1);
                                w = prev_w;
                            } else {
                                elem_col = lo;
                                w = tmp;
                            }

                            break found;
                        }
                        else if (
                            position > 1
                        ) {
                            elem_col = E.end;
                            w = E.width;
                            
                            break found;
                        }
                    }
                    else if (
                        (position === 2)
                        ||
                        (position === 1)
                    ) {
                        elem_col = E.start;
                        w = 0;
                        
                        break found;
                    };

                    continue;
                };
                
                selection = cursor.selection;
                selection.token_end = E;
                selection.left_end = char_l = w;

                cursor.token = E;
                cursor.token_start = elem_col;

                style = cursor.element.style;
                style.top = `${top}px`;
                style.left = `${left + w}px`;
                style.height = `${E.height}px`;

                token = selection.token_start;
                from = token.index;
                to = E.index;

                offset = selection.offset;
                char_i = selection.left_start;

                x = token.block.index;
                y = E.block.index;

                if (
                    (x > y)
                    ||
                    (from > to)
                    ||
                    (
                        (x === y)
                        &&
                        (from === to)
                        &&
                        ((offset) > elem_col)
                    )
                ) {
                    selection.direction = 1;

                    tmp = from;     from = to;       to = tmp;
                    tmp = char_i;   char_i = char_l; char_l = tmp;
                    tmp = elem_col; elem_col = offset; offset = tmp;

                    selection.token_left = E;
                    selection.token_right = token;
                }
                else {
                    selection.direction = (
                        ((from === to) && (offset === elem_col))
                        ? 0
                        : 2
                    );

                    selection.token_left = token;
                    selection.token_right = E;
                };

                selection.start = offset;
                selection.end = elem_col;

                tmp = ((to - from) + 1);
                
                w = sbs.length;
                if (tmp >= w) {
                    x = array_expand(
                        tmp, w, A.size_selection_blocks, sbs, SelectionBlockDefault, SelectionBlock
                    );
                    setup(sbs, w, x, SelectionBlock, foreach);
                };

                w = sgs.length;
                if (tmp >= w) {
                    x = array_expand(
                        tmp, w, A.size_selection_groups, sgs, SelectionGroupDefault, SelectionGroup
                    );
                    setup(sgs, w, x, SelectionGroup, foreach);
                }
                
                i = 0;
                w = A.length_selection_blocks;
                sblock = sbs[i];

                token = tokens[from];
                block = sblock.block = token.block;
                style = sblock.element.style;

                y = 0;
                selection.i = y;
                (group = sgs[y++])
                .value_start(i++, block)
                
                sblock.bind_to_token(token);

                style.top = `${token.top}px`;
                style.left = `${token.left + char_i}px`;
                style.height = `${token.height}px`;
                
                if ((to - (from++)) === 0) {
                    group.value_finish(i);
                    sblock.set_boundaries(offset, elem_col);
                    style.width = `${char_l - char_i}px`;
                }
                else {
                    sblock.set_boundaries(offset, token.end);
                    style.width = `${token.width - char_i + wwt}px`;
                    
                    for(;from < to; from++){
                        token = tokens[from];
                        sblock = sbs[i];
                        next_block = (sblock.block = token.block);

                        sblock.bind_to_token(token);
                        sblock.assign_token_boundaries(token);
                        
                        sblock.stylize_middle(sblock.element.style, token, wwl, wwt);

                        if (block !== next_block) {
                            group.value_finish(i);

                            (group = sgs[y++])
                            .value_start((i), (block = next_block));
                        }
                        i++;
                    };

                    sblock = sbs[i];
                    token = tokens[from];

                    sblock.bind_to_token(token);
                    sblock.set_boundaries(token.start, elem_col);
                    
                    next_block = sblock.block = token.block;
                    sblock.stylize_last((sblock.element.style), token, char_l, wwl);

                    if (block === next_block) {
                        group.value_finish(++i);
                    }
                    else {
                        group.value_finish(i);

                        (group = sgs[y++])
                        .value_set(i, (++i), (next_block));
                    }
                }

                if (i > w) {
                    while(w < i) {
                        fragment.appendChild(sbs[w++].element);
                    };
                    list_selections.appendChild(fragment);
                    A.length_selection_blocks = i;
                }
                else if (i < w) {
                    range.setStartBefore(sbs[i].element);
                    range.setEndAfter(sbs[w - 1].element);
                    range.deleteContents();
                    A.length_selection_blocks = i;
                };

                selection.l =
                A.length_selection_groups =
                    y;
                
                break cycle;
            }
        };
    }
);
