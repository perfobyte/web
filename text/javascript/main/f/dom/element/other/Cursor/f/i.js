import {CURSOR_EL as template} from '../../../../../../elems/i.js';

import Default from './default.js';
import {setup, setup_iteration} from './setup/i.js';

export default {
    template,

    default: Default,

    setup,
    setup_iteration,

    setup_token: null,
};
