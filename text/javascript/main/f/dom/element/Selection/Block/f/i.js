import {SELECTION_EL} from '../../../../../../elems/i.js';

import Default from './default.js';
import {setup, setup_iteration} from './setup/i.js';
import bind_to_token from './bind_to_token.js';
import assign_token_boundaries from './assign_token_boundaries.js';
import set_boundaries from './set_boundaries.js';
import {stylize_middle, stylize_last} from './stylize/i.js';

export default {
    template: SELECTION_EL,

    default: Default,
    setup,
    setup_iteration,
    bind_to_token,
    assign_token_boundaries,
    set_boundaries,
    stylize_middle,
    stylize_last,
}