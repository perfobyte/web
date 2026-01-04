import {main, elems, text_width_container, list} from '../../../elems/i.js';
import {prevent_scroll, node_text} from '../../../conf/i.js';
import {state_app, state_alloc, state_style as S} from '../../../state/i.js';


export default (
    (e) => {
        var
            max = Math.max,
            min = Math.min,
            
            input_el = main.element_input,

            window = e.view,
            document = window.document,

            i = 0,
            l = state_alloc.length_loaded_elems,

            list = e.currentTarget,

            x = (list.scrollLeft + (e.clientX - S.left_list)),
            y = max((list.scrollTop + (e.clientY - S.top_list)), (S.top_content)),

            top = 0,
            left = 0,

            position = 0,
        
            o = 0,
            elem_col = 0,
            
            cursor = main.cursor,
            style = null,
            E = null,
            
            w = 0,

            value = "",

            char_i = 0,
            char_l = 0,
            
            text = null,
            prev_w = 0,
            tmp = 0,

            lo = 0,
            hi = 0
        ;

        if (y >= S.height_loaded_start) {
            y = elems[i=l-1].top;
        };
        
        cycle: for(; i < l; i++){
            E = elems[i];
            
            left = E.left;
            top = E.top;
            position = E.position;
            value = E.block.value;

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
                                node_text.data = value.substring(char_i, tmp);
                                
                                if (text_width_container.offsetWidth < x) {lo = tmp + 1}
                                else {hi = tmp};
                            }

                            node_text.data = value.substring(char_i, Math.max(char_i, lo - 1));
                            prev_w = text_width_container.offsetWidth;

                            node_text.data = value.substring(char_i, lo);
                            tmp = text_width_container.offsetWidth;

                            if (x < ((prev_w + tmp) / 2)) {
                                elem_col = lo - 1;
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
                            elem_col = E.length;
                            w = E.width;
                            break found;
                        }
                    }
                    else if (
                        (position === 2)
                        ||
                        (position === 1)
                    ) {
                        w = 0;
                        elem_col = 0;
                        break found;
                    };

                    continue;
                };

                cursor.start_elem = E;
                cursor.start_elem_start = elem_col;

                style = cursor.element.style;
                
                style.top = `${top}px`;
                style.left = `${left + w}px`;
                style.height = `${E.height}px`;

                break cycle;
            }
        };
        
        (input_el === document.body)
        ||
        (input_el.focus(prevent_scroll));

        e.preventDefault();
    }
);
