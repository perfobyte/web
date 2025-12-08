import {
    on_message,
} from './on/i.js';

import {fs_state} from './state/i.js';

[
    4096 = (
        [content][
            tag = (
                [tags_offset][tags_ids][tags_length]
            )
        ]
    )
];



[
    "content" [
        value,
        holes,
    ];

    "messages" [
        value,
        holes,
    ];
    
    "tags" [
        value,
        holes,
    ];
    
    "get",
    "append",
    "update",
    "deletion",

    "messages_archive",
];

(
    (
        (
            globalThis
            .navigator
        )
        .storage
    )
    .getDirectory()
)
.then(
    (root) => (
        (fs_state.root = root),
        (globalThis.onmessage = on_message)
    )
);
