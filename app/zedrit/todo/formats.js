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
    mp3 (MPEG Audio Layer III),
    wav (PCM),

    ogg (Vorbis),
    ogg (Opus),

    aac,
    flac,
    opus,
];
Video [
    browser [
        H.264 + AAC,
        H.264 + PCM,
        H.264 + ALAC,
        H.264 + FLAC,
        VP8 + AAC,
        VP8 + FLAC,
        VP9 + AAC,
        VP8 + PCM,
        VP9 + FLAC,
        VP9 + PCM,
        AV1 + AAC,
        AV1 + FLAC,
        AV1 + PCM,
    ],

    os [
        H.265 + AAC,
        HEVC + AAC,
        H.265 + PCM,
        H.265 + ALAC,
        H.265 + MP3,
        HEVC + AC-3,
        HEVC + Dolby Digital,
        HEVC + PCM,
    ],

    browser extension [
        H.264 + PCM,
        H.264 + MP3,
    ],

    * subtitles [
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