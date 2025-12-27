import template from './template.js';

import {
    scrollbar_thumb_x_style,
    scrollbar_thumb_y_style,
} from "../../../elems/i.js";

import {
    scrollbar_thumb_x_transform,
    scrollbar_thumb_y_transform,
} from '../../i.js';

export default [
    template(
        scrollbar_thumb_x_style,
        scrollbar_thumb_x_transform,
    ),
    template(
        scrollbar_thumb_y_style,
        scrollbar_thumb_y_transform,
    ),
];
