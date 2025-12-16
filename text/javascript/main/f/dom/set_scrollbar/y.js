import {
    scrollbar_thumb_y_style,
} from "../../../elems/i.js";

import {
    style_state,
} from '../../../state/i.js';

import {
    scrollbar_thumb_y_transform,
} from '../../i.js';

export default (
    (translate, ratio) => {
        return (
            scrollbar_thumb_y_style
            .transform = (
                scrollbar_thumb_y_transform(
                    translate,
                    (
                        style_state
                        .thumb_y_scale = (
                            Math.min(
                                1,
                                ratio,
                            )
                        )
                    )
                )
            )
        )
    }
);
