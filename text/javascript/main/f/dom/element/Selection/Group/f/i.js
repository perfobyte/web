import Default from './default.js';
import {value_finish, value_start, value_set, value_buffer} from './value/i.js';
import {token_first, token_last} from './token/i.js';
import {setup, setup_iteration} from './setup/i.js';
import string_value from './string_value.js';

export default {
    default: Default,
    setup,
    setup_iteration,

    value_finish, value_start, value_set, value_buffer,
    token_first, token_last,

    string_value,
};
