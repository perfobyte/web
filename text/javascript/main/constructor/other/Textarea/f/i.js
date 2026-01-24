import {REGULAR_TEXTAREA_EL as template} from '../../../../elems/i.js';
import state_navigation from '../../../../state/navigation.js';

import Default from './default.js';
import {setup, setup_iteration} from './setup/i.js';

export default {
    template,
    default: Default,
    setup,
    setup_iteration,

    state_navigation,
};
