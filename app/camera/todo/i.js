
add audio;
sound in video view;

window.open=only for applications [
    exit (if not window.open then hide close top-right button);
]

device_rotation=(0|1|2);

video_mute;
shot_delay = n_seconds;

query [
    mode [
        value [
            device_rotation,
            shot_delay (seconds to start),
            
            choose_by=[
                deviceId,
                index,
                CONST=(
                    [first,last,]
                    + formula("-+*/")
                ),
            ],
            
            0 [
                shots=amount,
            ],

            1 [
                time=ms,
            ],

            2 [
                time=ms,
                video_mute=bool,
            ]
        ]
    ],
];
