export default {
    module.local_camera [
        add audio: true,
        video_mute: true,

        device_rotation: {
            0: "auto",
            1: "horizontal",
            2: "vertical",
        },

        shot_delay: 'n_seconds',

        query: {
            mode: {
                0: 'photo',
                1: 'audio',
                2: 'video',
                3: 'video_muted',
            }
        },

        window: {
            open: {
                description: "for camera call",
                path,
            },
        },
    ],

    mix audio of micro and audio of screen;
    
    module.p2p [
        calls_list = true;
        screen_share = "volume_changer"
    ];
    module.voip;
    
    //------------------------------------------;

    module.sfu;
    module.sfu_e2e;

    //------------------------------------------;

    both [
        module.wifi_ibss [
            linux,
        ],
        module.wifi_direct [
            linux,
            windows,
            android,
        ],
        module.apple_mc [
            macos,
            ios,
        ],
        module.wifi_aware [
            android
        ],
    ];
    
    only_audio[
        module['Bluetooth Classic (SCO/HFP)'],
        module["Bluetooth LE Audio (LC3)"],
    ] = (all);

    //------------------------------------------;

    module.rtsp,
    module.rtcp [
        (cameras/media_servers),
        streaming_from_camera,
    ];
}