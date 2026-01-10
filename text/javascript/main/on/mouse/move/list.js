
import {
    main,
    tokens,
    text_width_container,
    selection_blocks,
    rows,
    SELECTION_EL,
    list_selections,
    list
} from '../../../elems/i.js';
import {
    prevent_scroll,
    node_text,
    selection_groups,
    selections,

    range,
    fragment,
} from '../../../conf/i.js';
import {
    state_app,
    state_alloc as A,
    state_style as S,
} from '../../../state/i.js';
import {
    SelectionBlock,
    Selection,
} from '../../../f/i.js';

export default (
    (e) => {
        var
            max = Math.max,
            cursor = main.cursor,
            
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
            group = null,
            offset = 0,

            SelectionBlockDefault = SelectionBlock.prototype.default,
            SelectionDefault = Selection.prototype.default
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
            value = block.value;

            if (
                (y >= top)
                &&
                (y < E.bottom)
            ) {
                found: {
                    if (x >= (left)) {
                        if (x < (E.right)) {
                            text_width_container.replaceChildren(node_text);

                            x -= left;
                            char_i = E.start;
                            char_l = E.end;

                            lo = char_i;
                            hi = char_l;

                            while (lo < hi) {
                                tmp = (lo + hi) >> 1;
                                node_text.textContent = value.substring(char_i, tmp);
                                
                                if (text_width_container.offsetWidth < x) {lo = tmp + 1}
                                else {hi = tmp};
                            }

                            lo1 = (lo - 1);

                            node_text.textContent = value.substring(char_i, max(char_i, lo1));
                            prev_w = text_width_container.offsetWidth;

                            node_text.textContent = value.substring(char_i, lo);
                            tmp = text_width_container.offsetWidth;

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

                cursor.token = E;
                cursor.token_start = elem_col;

                style = cursor.element.style;
                style.top = `${top}px`;

                selection.left_end = char_l = w;

                style.left = `${left + w}px`;
                style.height = `${E.height}px`;

                from = (token = selection.token_start).i;
                to = E.i;

                offset = selection.offset;
                char_i = selection.left_start;

                selection.token_end = E;
                selection.end = (offset);

                if (
                    (from > to)
                    ||
                    (
                        (from === to)
                        &&
                        ((offset) > elem_col)
                    )
                ) {
                    selection.direction = 1;

                    tmp = from;     from = to;       to = tmp;
                    tmp = char_i;   char_i = char_l; char_l = tmp;
                }
                else {
                    selection.direction = (
                        ((from === to) && (offset === elem_col))
                        ? 0
                        : 2
                    );
                };

                selection.token_end = E;
                selection.end = (elem_col);

                tmp = ((to+1)-from);
                
                if (tmp >= l) {
                    y = l + A.size_selection_blocks;
                    
                    while(y < tmp) {
                        y += A.size_selection_blocks;
                    };

                    while(l<y){
                        selection_blocks.push(
                            SelectionBlockDefault(
                                SelectionBlock, l++, SELECTION_EL.cloneNode(true)
                            )
                        );
                    }
                };
                console.log(offset, elem_col);

                i = 0;
                w = l = A.length_selection_blocks;
                x = A.length_selection_groups;
                sblock = selection_blocks[i++];

                token = tokens[from];
                sblock.block = token.block;
                style = sblock.element.style;

                style.top = `${token.top}px`;
                style.height = `${token.height}px`;
                style.left = `${token.left + char_i}px`;

                if ((to-(from++)) === 0) {
                    style.width = `${char_l - char_i}px`;
                }
                else {
                    style.width = `${token.width - char_i}px`;
                    
                    for(;from<to;from++){
                        token = tokens[from];
                        sblock = selection_blocks[i++];
                        sblock.block = token.block;
                        style = sblock.element.style;

                        style.top = `${token.top}px`;
                        style.left = `${token.left}px`;
                        style.width = `${token.width}px`;
                        style.height = `${token.height}px`;
                    };

                    sblock = selection_blocks[i++];
                    token = tokens[from];
                    sblock.block = token.block;
                    style = sblock.element.style;

                    style.top = `${token.top}px`;
                    style.left = `${token.left}px`;
                    style.width = `${char_l}px`;
                    style.height = `${token.height}px`;
                }

                if (i > w) {
                    while(w<i) {
                        fragment.appendChild(selection_blocks[w++].element);
                    };
                    list_selections.appendChild(fragment);
                    A.length_selection_blocks = i;
                }
                else if (i < w) {
                    range.setStartBefore(selection_blocks[i].element);
                    range.setEndAfter(selection_blocks[w - 1].element);
                    range.deleteContents();
                    A.length_selection_blocks = i;
                };

                x = selection_groups.length;


                if (i >= x) {
                    y = A.size_selection_groups;
                    while (i >= x) {
                        x += y;
                    };
                    y = i;
                    while (y < x) {
                        selection_groups.push(SelectionDefault(Selection,y++))
                    }
                };

                l = i;
                i = 0;
                x = 0;
                y = 0;
                group = selection_groups[y++];
                
                while (i < l) {
                    sblock = selection_blocks[i++];
                    if ((group.block!==sblock.block)||(i===l)){
                        group.i = x;
                        x = (group.l = i);
                        group = selection_groups[y++];
                    }
                };

                break cycle;
            }
        };
    }
);
