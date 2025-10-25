Image [
    jpeg,
    png,
    gif,
    
    svg,
    bmp,
    webp,
    avif,
    
    heic,
];

Audio [
    'audio/mpeg',
    'audio/wav; codecs="1"',
    'audio/wav; codecs="3"',

    'audio/ogg; codecs="vorbis"',
    'audio/ogg; codecs="opus"',

    'audio/aac',
    'audio/flac',

    'audio/opus',
];

Video [
    formats [
        'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
        'video/webm; codecs="vp8, mp4a.40.2"',
        'video/webm; codecs="vp9, mp4a.40.2"',
        'video/mp4; codecs="av01.0.04M.08, mp4a.40.2"',
        'video/webm; codecs="av01.0.04M.08, mp4a.40.2"',
        'video/mp4; codecs="hvc1.1.6.L93.B0, mp4a.40.2"',

        'video/webm; codecs="vp8, vorbis"',
        'video/webm; codecs="vp8, opus"',
        'video/webm; codecs="vp9, vorbis"',
        'video/webm; codecs="vp9, opus"',
        'video/webm; codecs="av01.0.04M.08, opus"',
        'video/webm; codecs="av01.0.04M.08, vorbis"',
    ],

    subtitles [
        [
            browser,
            webm,
            mkv,
        ] [
            vtt
        ],

        [MP4, MOV] [
            Timed Text (TX3G),
            CEA-608 / CEA-708,
            iTT (iOS Timed Text),
        ],

        [WebM, MKV] [
            SSA/ASS,
        ],

        external [
            SRT,
        ],
    ]
];