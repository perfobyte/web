import {
    on_message,
} from './on/i.js';

import {fs_state} from './state/i.js';

globalThis.navigator.storage.getDirectory()
.then(
    (root) => (
        (fs_state.root = root),
        (globalThis.onmessage = on_message)
    )
);
