import text_width from '../text_width.js';
import {text_width_container} from '../../../elems/i.js';
import {style_state} from '../../../state/i.js';


export default (
    (string, char_i, string_offset) => {
        var
            w = text_width(
                text_width_container,
                string.substring(string_offset, char_i)
            ),

            list_width = style_state.list_width
        ;
        
        return (w >= (list_width));
    }
);
