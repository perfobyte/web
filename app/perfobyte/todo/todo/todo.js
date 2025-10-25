
module.journal [
    -40px for scroll;

    settings [
        design;
        template of style;
        test audio device;
    ];

    player [
        audio,
        video,
    ];

    rows-of-row (spans in button);

    smile titles on each language + (:[[smile_name]] -> [[smile_grapheme]]);
    
    settings [
        test micro, camera (with interface (wave))
    ];
    
    open db;
    chat add;
    chat add scroll height;

    chat choose and load;
    message send (+update height);

    search chats by name;
    (IMPORT + EXPORT);

    links in message text [
        redirect link,
        file (download),

        image,
        audio,
        video,
    ];
];

module.cloudy [
    import "./login.js";
    import "./db/i.js";
    import "./link_action.js";
];

module.simple_email [
    html editor [
        ((html + css) render),

        (color, style) change,
        
        image,
    ];

    server;
];

module.safe_cloud;
module.pretty_good_private_emails;

module.cell;

import "./flow.js";
import "./languages.js";

perfobyte publication [
    settings [
        turn (on|off),
        change,
    ];
    mobile version (m.perfobyte.com);
    accessibility;
];

landings [
    perfobyte.com/about,
];

perfobyte_zedrit [
    perfobyte,
    open_source,

    migration_transcompiler;
];

//--------------------------------;

perfobyte_spell [
    make your messanger private (extension);
];

//--------------------------------;

module.wifi_direct;
module.wifi_apple_mc;

module.wifi_ibss;
module.wifi_aware;

module['bluetooth_classic (RFCOMM / OBEX / (A2DP / HFP / HSP))'];
module.bluetooth_low_energy;

//--------------------------------;

module.radio [
    "LPWAN (LoRaWAN)";
] = (all);

module.datacast_uplink [
    "USB DVB-S2/S2X tuner" = without([ios]);
    [
        sat>ip server = "Telestar Digibit R1",
        Satellite dish + LNB (universal ku-band),
        coaxial,
        fastener,
    ] = all
];

module.satelite [
    system_api [
        "Iridium SBD / RockBLOCK 9602/9603",
        "Inmarsat IsatData Pro (IDP)",
        "Swarm M138 (Globalstar/Swarm): 115200 8-N-1, NMEA-style",
    ]
    .based_on(UART)
] = (all);

//--------------------------------;

module.fs,
module.ssh,
module.ftp [
    folders,
    code editor textarea,
    code highlights,
    I/O,
];

//--------------------------------;

app.crypt [
    application [
        web;
        desktop;
        mobile (as client);
    ];
    module.crypt;

    feature.bot += [
        crypto payment API,
    ];
];

//--------------------------------;

module.email_enterprise;

[ ? ] PerfoByte Lock = import "./lock/todo.js";

//--------------------------------;

feature.bot [
    zedrit;

    polling;
    webhook;

    flow API;

    bot.settings += [
        bot_token,
        link to the docs.perfobyte.com,
    ];
];
docs.perfobyte.com;

new_message_type = app [
    module.clearnet,
    module.onion,
    module.i2p,
    module.freenet [
        linux, windows, macos,
        android, ios,
    ];

    by [
        link;
        inline_value;
    ];

    search_engine;
    cache into binary version [
        HTML,
        CSS,
        JS,
    ];

    version [
        inline;
        frame;
    ];
];

app.updater [
    feature.module;
];

//----------------------------------------;

import "./zedrit.js";
