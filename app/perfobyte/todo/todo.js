
logo;

add in camera audio;

format [
    text,
    html,
    markdown,
];

first loading ( #loader );

app password (
    AES-GCM (
        crypto.subtle
    ) (
        password
    )
) (
    required
);

chat password;
call password;

chat add;

chat [
    own _ (local)
];

export;
import;

registration and login [

    input(
        phone_number
    )
    .get([
        country,
        name,
        surname,
    ]),

    * data map [
        country,
    ],


    blacklist for black countries [
        Russia,
        Iran,
        North Korea,
        ...african countries,
    ],

    * database API [
        phone_number,
        
        human ([
            name,
            surname,

            ...country_history,

            country_nationality
        ])
    ]

    user {
        fullname,
        verified: bool,
    },

    if (VIRTUAL) {
        return (
            options([
                pay 1 US dollar,
                passport data,
                call,
            ])
        );
    }
    else {
        if (FIXED_LINE) {
            call and say code;
        }
        else if (SIM) {
            send code;
        }

        get data about user (KYC);
    }
];

chat [
    simple (noncrypted, db),
    basic _ (e2e + AES-GCM) (backups),
    mail _ (local) (backups),
];

settings [
    add sections (iphones like),
    date+time formating,
];

create link form
+
link action [
    open chat [
        scroll to which message [
            id,
            
            last,
            first,
        ]
    ],
    open call room [
        [
            output [audio,video],
            input [audio,video],
        ],
        with screen sharing,
        fullscreen,
        volume,
    ],

    create chat,
];

customisation [
    themes [
        black,
        white,
        system,
    ]
];

system chats [
    chat manager,
    administrator,
];

electron [
    windows,
    linux,
    macos,
];

open LLC;

bot = API in module;

monetisation = User''s modules [
    module downloads and using (as dev royalty),
    module payments (own payment system),

    access [
        chat,
        call,
        chat create,
        protocol,
    ]
];

native;

...modules;
