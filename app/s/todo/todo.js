
[
    PerfoByte Table;
    PerfoByte Structure;
    artisan;
];

remote_controller_bosend [
    * extension;

    remote [
        read,
        read-n-write,
    ];
];

structure [
    PerfoByte Document;
    website (html, css);
    PerfoByte Presentation;
    Image Drawing="canvas drawing";

    App [
        web application (html, css, js) (+cross-platform) (with [perfobyte_js]),

        SEO render,
    ];
];

table [
    *lang=SCRIPT_LANG;
    input=files;

    Remote [
        input=backend.data,

        give [
            server program which send entries data of any database,
        ],
    ];
];
