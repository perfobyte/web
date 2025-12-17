import {list} from '../../../elems/i.js';
import {style_state} from '../../../state/i.js';

import {set_scroll} from '../../../f/i.js';

export default (
    (
        get_scrolled,
        get_scroll_size,

        set_list_scroll,

        scrollbar,
        scrollbar_thumb_style,

        get_loaded_size,
        scrollbar_thumb_transform,
        get_scale,
    ) => {
        return (e) => {
            var
                scrolled = get_scrolled(e, style_state),
                
                ratio = (scrolled / get_scroll_size(style_state)),
                
                list_scroll = (ratio * get_loaded_size(style_state))
            ;
            return void (
                set_scroll(
                    scrollbar_thumb_style,
                    scrollbar_thumb_transform(
                        scrolled,
                        get_scale(style_state)
                    ),
                    set_list_scroll,
                    list,
                    list_scroll,
                )
            );
        }
    }
);
