

export var
    TE = new TextEncoder(),
    TD = new TextDecoder(),

    ES = "",
    EA = [],

    not_passive = { passive: false },

    origin = [
        "",
        "",
        "http://localhost:2001",
        "http://localhost:2002",
    ],

    API_1 = new Image(),
    API_2 = new Audio(),
    API_3 = document.createElement("video"),
    API_CANVAS = document.createElement("canvas")
;
