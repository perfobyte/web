import {fs_state} from '../../state/i.js';

export default (
    (new_access) => {
        return void (
            fs_state.access = new_access
        );
    }
);
