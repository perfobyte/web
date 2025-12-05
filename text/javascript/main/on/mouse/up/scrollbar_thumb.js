import scrollbar_thumb_template from './scrollbar_thumb_template.js';
import {on_scrollbar_thumb_mousemove} from '../move/i.js';
import {scrollbar_thumb} from '../../../elems/i.js';

export default (
    Array.from(
        on_scrollbar_thumb_mousemove,
        (move,i) => {
            return scrollbar_thumb_template(move,scrollbar_thumb[i].classList);
        }
    )
);
