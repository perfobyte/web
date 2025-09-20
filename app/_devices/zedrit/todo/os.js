

export default [
    * includes [
        local pages,
        system code files,

        "website could install own extensions",

        extended standart including api of [zedrit_os],
    ];

    cellular sms in perfobyte;
    cellular call in zedrit;

    service [
        [settings.zedrit.com] [
            network stack [
                tcp/ip,
                bluetooth,
            ];
            device drivers [
                camera,
                micro,
                graphics,
                USB,
                sound,
            ];
            i/o [
                keyboard,
                mouse,
                touchpad,
                touch screen,
            ];
            date+time;
            sound mixer;
            display;
        ];
    ];
];
