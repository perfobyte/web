
PerfoByte Document;
website (html, css);
PerfoByte Presentation;
Image Drawing="canvas drawing";

pattern [
    Image [
        jpeg,
        
        png,
        gif,
        webp,
        avif,
        svg,
        bmp,
    ],
    Audio [
        mp3 [MPEG Audio Layer III],
    
        oga [Vorbis,Opus,],
        wav [PCM],
        aac [AAC],
        opus [Opus],
    ],
    Video [
        mp4 [
            video [H.264 / H.265],
            audio [aac]
        ],
        webm [
            video [VP8 / VP9 / AV1],
            audio [vorbis / Opus]
        ],
        ogg [
            video [theora],
            audio [vorbis],
        ],
    
        * subtitles,
    ],
];

App [
    web application (html, css, js) (+cross-platform) (with [perfobyte_js]),

    SEO render,
];
