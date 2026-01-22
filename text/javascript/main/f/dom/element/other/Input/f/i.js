import {REGULAR_INPUT_EL as template} from '../../../../../../elems/i.js';
import state_navigation from '../../../../../../state/navigation.js';

import Default from './default.js';
import {setup, setup_iteration} from './setup/i.js';

import {
    on_input_focus,
    on_input_blur,
    on_regular_input_beforeinput,
} from '../../../../../../on/i.js';

export default {
    template,

    default: Default,
    
    setup,
    setup_iteration,

    on_input_focus,
    on_input_blur,
    on_regular_input_beforeinput,

    state_navigation,
};
