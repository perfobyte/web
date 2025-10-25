


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

call [
    native inside switching bettween (only video, only audio, audio+video)
];