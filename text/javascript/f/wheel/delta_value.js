import {one} from '../general/i.js';

export default [
    {
        0: one,
        1: (ss) => (ss.wheel_x_string_value),
        2: (ss) => (ss.list_width),
    },
    {
        0: one,
        1: (ss) => (ss.wheel_y_string_value),
        2: (ss) => (ss.list_height),
    }
];
