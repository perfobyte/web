
add audio;
sound in video view;
exit (if not window.open then hide close top-right button);
device_rotation (mobile);

video_mute;

query [
    mode,
    
    choose_by=[
        deviceId,
        index,
        CONST=[first,last,]+formula("-+*/"),
    ],

    shot_delay=n_seconds,
    device_rotation=(0|1),
    video_mute=bool,
];
