

import {preventDefault} from './f/i.js';

(
    (w,d,c) => {
        return (
            (w.onerror = c.error),

            w.addEventListener("contextmenu",preventDefault)
        )
    }
)(
    globalThis.window,
    globalThis.document,
    globalThis.console,
);
