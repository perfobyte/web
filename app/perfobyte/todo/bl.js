
test micro in call (mobile),

settings [
    test micro (with interface (wave)),

    default [
        (for each chat start),
        (for each chat)
    ] [
        volume,
        devices,
        (show,listen,mic,video),
        focus,
        screen share (mode),
    ],
];

full customisation of interface;

with settings [
    static wave animation (animated outline with fixed width),
    mute video and audio for both sides,
];

at interval of 1 minute - update each messages'' time (at html);

mix audio of micro and audio of screen,

module [
    in session (SS chat),
];

link action[
    "open chat"
]
.(scroll to which message) = [
    calculation (-+*/ with variables last and first + numbers),
];
