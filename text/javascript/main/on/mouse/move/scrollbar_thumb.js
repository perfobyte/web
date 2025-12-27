import template from './template.js';

import {
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
} from '../../../elems/i.js';

import {
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
} from '../../../f/i.js';

export default [
    template(
        scrollbar_thumb_x_style,

        "thumb_x_translate",
        "movementX",

        "scroll_content_width",
        "content_width",

        "thumb_x_scale",
        "scrollLeft",

        scrollbar_thumb_x_transform,
    ),

    template(
        scrollbar_thumb_y_style,

        "thumb_y_translate",
        "movementY",

        "scroll_content_height",
        "content_height",

        "thumb_y_scale",
        "scrollTop",

        scrollbar_thumb_y_transform,
    ),
];
