import {fs_state} from '../../state/i.js';

export default (
    (new_file) => {
        return (
            (fs_state.file = new_file)
            .createSyncAccessHandle()
        );
    }
);
