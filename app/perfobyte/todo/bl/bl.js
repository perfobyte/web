
smile titles on each language + (:[[smile_name]] -> [[smile_grapheme]])
folders [
    * IDs = chats,sa

    (
        (program -> specific IDs)
        +
        on_chat_add() {
            program()
        }
    )
    |
    (specific IDs -> specific IDs),

]

settings [
    test micro (with interface (wave))
];

with settings [
    static wave animation (animated outline with fixed width),
];

mix audio of micro and audio of screen;

make it parameters instead of constants [

    app,
    chat [
        query [
            &block=256,
            &key=64,
            &nonce=12,
            &param=250,
        ],
    ]
]
