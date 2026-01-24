import {TOKEN_EL} from '../../../../elems/i.js';

import {setup, setup_iteration} from './setup/i.js';
import string_value from './string_value.js';
import Default from './default.js';

export default {
    template: TOKEN_EL,
    
    default: Default,

    setup,
    setup_iteration,
    
    string_value,
};
