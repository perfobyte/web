import {
    scrollbar_thumb_y_style,
} from "../../../elems/i.js";

import {
    scrollbar_thumb_y_transform,
} from '../../scroll/i.js';

export default (translate, ratio) => {
    return (
        scrollbar_thumb_y_style
        .transform = (
            scrollbar_thumb_y_transform(
                translate,
                ratio,
            )
        )
    );
};
