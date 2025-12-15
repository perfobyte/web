import {
    scrollbar_thumb_x_style,
} from "../../../elems/i.js";

import {
    style_state,
} from '../../../state/i.js';

import {
    scrollbar_thumb_x_transform,
} from '../../i.js';

export default (
    (ratio) => {
        return (
            (
                scrollbar_thumb_x_style
                .transform = (
                    scrollbar_thumb_x_transform(
                        style_state.thumb_x_translate,
                        (
                            style_state
                            .thumb_x_scale = (
                                Math.min(
                                    1,
                                    ratio,
                                )
                            )
                        )
                    )
                )
            )
        )
    }
);
