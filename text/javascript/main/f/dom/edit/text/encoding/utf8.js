
import {
    alloc_state,
    style_state,
} from '../../../../../state/i.js';
import {
    messages_fragment as fragment,
    messages_range as range,
    separation_result,
} from '../../../../../conf/i.js';

import {
    content,
    list_inner_style,
    MESSAGE_ROW_EL as template,
    elements,
} from '../../../../../elems/i.js';





export default (
    (
        string,
        msgs,

        i,
        l,
        size_message,

        elems_i,
        elems_l,

        expand_nodes,
        element_render,

        is_separation,
    ) => {
        var
            element = null,
            
            char_i = 0,
            char_l = 0,

            top = 0,
            bottom = 0,

            elements_l_start = elems_l,

            row_height = style_state.row_height,
            height = style_state.loaded_height,

            string_offset = 0
        ;

        general: {
            append: {
                while (i < l) {
                    string_offset = char_i = msgs.getUint16(i+12,true);
                    char_l = (string_offset + (msgs.getUint16(i+14,true)));
                    
                    while (char_i < char_l) {
                        if (is_separation(string, char_i, string_offset, separation_result)) {
                            if (elems_i < elems_l) {
                                element_render(
                                    elements[elems_i++],
                                    string,

                                    string_offset,
                                    (char_i),
                                );
                                string_offset = separation_result.string_offset;
                            }
                            else {
                                break append;
                            };
                        };
                        char_i = separation_result.char_i;
                    };

                    if (elems_i < elems_l) {
                        if (string_offset < char_l) {
                            element_render(
                                elements[elems_i++],
                                string,

                                string_offset,
                                (char_l),
                            );
                        }
                    }
                    else {
                        break append;
                    };

                    i += size_message;
                }
                break general;
            };

            expand_nodes(
                elements,
                elems_i,
                template,
                alloc_state
            );
            
            while (char_i < char_l) {
                if (is_separation(string, char_i, string_offset, separation_result)) {
                    element_render(
                        (element = elements[elems_i++]),
                        string,

                        string_offset,
                        char_i,
                    );

                    string_offset = separation_result.string_offset;
                    
                    elems_l++;
                    element.style.top = `${height}px`;
                    height += row_height;

                    fragment.appendChild(element);
                };
                
                char_i = separation_result.char_i;
            };

            if (string_offset < char_l) {
                element_render(
                    (element = elements[elems_i++]),
                    string,

                    string_offset,
                    (char_l),
                );
                elems_l++;
                element.style.top = `${height}px`;
                height += row_height;

                fragment.appendChild(element);
            }
            i += size_message;

            

            while (i < l) {
                
                string_offset = char_i = msgs.getUint16(i+12, true);
                char_l = (string_offset + (msgs.getUint16(i+14, true)));

                while (char_i < char_l) {
                    if (is_separation(string, char_i, string_offset, separation_result)) {
                        element_render(
                            (element = elements[elems_i++]),
                            string,

                            string_offset,
                            char_i,
                        );
                        string_offset = separation_result.string_offset;

                        elems_l++;
                        element.style.top = `${height}px`;
                        height += row_height;

                        fragment.appendChild(element);
                    };
                    char_i = separation_result.char_i;
                };

                if (string_offset < char_l) {
                    element_render(
                        (element = elements[elems_i++]),
                        string,

                        string_offset,
                        (char_l),
                    );
                    elems_l++;
                    element.style.top = `${height}px`;
                    height += row_height;

                    fragment.appendChild(element);
                }

                

                i += size_message;
            };
        };

        if (elems_l > elements_l_start) {
            content.appendChild(fragment);
            alloc_state.length_loaded_elements = elems_l;
            style_state.loaded_height = height;
        }
        else if (elems_i < elems_l) {
            range.setStartBefore(element = elements[elems_i]);
            l = element.getBoundingClientRect().top;
            
            range.setEndAfter(element = elements[elems_l - 1]);
            l = (element.getBoundingClientRect().bottom - l);
            
            alloc_state.length_loaded_elements = (elems_i);
            style_state.loaded_height = (height - l);

            range.deleteContents();
        };

        return undefined;
    }
);
