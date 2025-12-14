import {alloc_state, style_state} from '../../../../../state/i.js';
import {
    messages_fragment as fragment,
} from '../../../../../conf/i.js';
import {
    list,
    elements as elems,
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

        render_element,
        is_separation,
        string_offset_change,
    ) => {
        var
            element = null,

            char_i = 0,
            char_l = 0,

            row_height = style_state.row_height,
            height = style_state.loaded_height,

            string_offset = 0
        ;
        c: {
            while (i < l) {
                string_offset = char_i = (msgs.getUint16(i+12, true));
                char_l = (string_offset + (msgs.getUint16(i+14, true)));

                a: {
                    while (char_i < char_l) {
                        if (is_separation(string, char_i, string_offset)) {
                            render_element(
                                (element = elems[elems_i++]),
                                string,

                                string_offset,
                                (char_i),
                            );
                            string_offset = string_offset_change(char_i, string_offset)
                            
                            elems_l++;
                            element.style.top = `${height}px`;
                            height += row_height;

                            fragment.appendChild(element);
                        }
                        char_i++;
                    };

                    render_element(
                        (element = elems[elems_i++]),
                        string,

                        string_offset,
                        (char_l),
                    );

                    elems_l++;
                    element.style.top = `${height}px`;
                    height += row_height;

                    fragment.appendChild(element);
                };

                i += size_message;
            };
        };

        list.appendChild(fragment);
        alloc_state.length_loaded_elements = elems_l;
        style_state.loaded_height = height;

        return undefined;
    }
);
