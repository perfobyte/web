

export default (
    (e) => {
        var
            left = 0,
            top = 0,
            position = 0,
            value = 0
        ;
        cycle: for(; i < l; i++) {
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

                cursor.elem = E;
                cursor.elem_start = elem_col;

                style = cursor.element.style;
                
                style.top = `${top}px`;
                style.left = `${left + w}px`;
                style.height = `${E.height}px`;

                break cycle;
            }
        };
    }
);
