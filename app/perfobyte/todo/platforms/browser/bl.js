
test micro in call (mobile),

settings [
    test micro (with interface (wave)),

    default  [
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

call optimization [
    if i used mc tracks in screen share time - dont request new same mc copy tracks for stop_screen_share
    (
        request only new video tracks for back
    ) (
        cases: [
            (tc === 2) && (call_display.m === 2) (sh without sound),
            (sh_mode === (1 and 2))
        ],

        * including sh_mode, mc, and vd switches
    ),

    
    screen share [
        mixed tracks into one for audio,
        2nd container for video,
    ],
    
    dont use stream which i dont see (cl_i_v) [
        audio in audio only,
        audio in audio+video (cl_i_v),
    ],

    optimized mode [
        if i turn off video then tell to participant turn off video send,
    ],

    optional settings [
        wave [
            for audio only,
            for audio+video,
        ]
    ],

    for only audio [
        if no waves [
            in one stream (and one player) all tracks with screen share,
        ]
    ],

    config of settings [
        (use screen share),
        (mic,vid,hp,wa,),
        (start volume),
        (start focus),
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

(
    link action
)[
    "open chat"
]
.(scroll to which message) = [
    calculation (-+*/ with variables last and first + numbers),
];

instead of join = (fill content into chat) - only from our servers;

native [
    bluetooth p2p,

    sms,

    lora [
        * (with access from goverment),
        short command with own way
    ],
],


call [
    native inside switching bettween (only video, only audio, audio+video)
];
