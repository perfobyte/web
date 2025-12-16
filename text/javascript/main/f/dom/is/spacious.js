import text_width from '../text_width.js';
import {text_width_container} from '../../../elems/i.js';
import {style_state} from '../../../state/i.js';
import {linebreaks} from '../../../conf/i.js';

import newline from './char/newline.js';

export default (
    (string, char_i, string_offset, separation_result) => {
        var
            next = (char_i + 1),
            w = 0,
            loaded_width = style_state.loaded_width
        ;
        return (
            (separation_result.char_i = next),

            (linebreaks.includes(string[char_i]))
            ? (
                (
                    style_state.loaded_width =
                        Math.max(
                            loaded_width,
                            text_width(
                                text_width_container,
                                string.substring(string_offset, char_i)
                            )
                        )
                ),
                (separation_result.string_offset = next),
                true
            )
            :
            (
                (
                    (
                        w = text_width(
                            text_width_container,
                            string.substring(string_offset, next),
                        )
                    ) >= (
                        style_state.list_width
                    )
                )
                ? (
                    (separation_result.char_i = next),
                    (separation_result.string_offset = (char_i)),
                    true
                )
                : false
            )
        );
    }
);
