
import {
    scrollbar_thumb_x_style,
} from "../../../elems/i.js";

import {
    scrollbar_thumb_x_transform,
} from '../../scroll/i.js';

export default (translate, ratio) => {
    return (
        scrollbar_thumb_x_style
        .transform = (
            scrollbar_thumb_x_transform(
                translate,
                ratio,
            )
        )
    );
};
