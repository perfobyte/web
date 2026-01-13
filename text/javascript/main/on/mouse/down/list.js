import {
    main,
    tokens,
    text_width_container,
    selection_blocks,
    rows,
    list_selections,
} from '../../../elems/i.js';
import {
    prevent_scroll,
    node_text,
    selection_groups,
    selections,
    range,
} from '../../../conf/i.js';
import {
    state_app,
    state_alloc as A,
    state_style as S,
} from '../../../state/i.js';

import {on_list_mousemove} from '../move/i.js';
import {on_list_mouseup} from '../up/i.js';

export default (
    (e) => {
        var
            max = Math.max,
            min = Math.min,
            
            input_el = main.input.element,
            cursor = main.cursor,

            window = e.view,
            document = window.document,

            i = 0,
            l = A.length_tokens,

            list = e.currentTarget,

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
            
            text = null,
            prev_w = 0,
            tmp = 0,

            lo = 0,
            hi = 0,
            lo1 = 0
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

                            node_text.textContent = value.substring(char_i, Math.max(char_i, lo1));
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
                
                //
                sblock = selection_blocks[0];
                selection = selections[0];
                group = selection_groups[0];
                
                
                selection.start =
                selection.end =
                selection.offset =
                    cursor.token_start =
                        elem_col
                ;

                selection.l = (selection.i = group.id) + 1;

                prev_w = A.length_selection_blocks;
                
                if ((prev_w - 1) > 0) {
                    range.setStartBefore(selection_blocks[1].element);
                    range.setEndAfter(selection_blocks[prev_w - 1].element);
                    range.deleteContents();
                };
                
                A.length_selection_blocks =
                A.length_selection_groups =
                A.length_selections =
                    1;

                sblock.element.style.width = "0px";

                prev_w || (list_selections.appendChild(sblock.element));

                sblock.block = (group.block = block);

                sblock.l = ((sblock.i = E.id) + 1);
                group.l = ((group.i = sblock.id) + 1);
                
                
                selection.token_offset =
                selection.token_end =
                selection.token_start =
                    cursor.token = E
                ;
                
                selection.selection_direction = 0;
                cursor.selection = selection;

                style = cursor.element.style;
                style.top = `${top}px`;
                style.left = `${left + (selection.left_start = w)}px`;
                style.height = `${E.height}px`;
                
                break cycle;
            }
        };

        window.addEventListener("mouseup", on_list_mouseup);
        window.addEventListener("mousemove", on_list_mousemove);
        
        (input_el === document.body)
        ||
        (input_el.focus(prevent_scroll));

        e.preventDefault();
    }
);
