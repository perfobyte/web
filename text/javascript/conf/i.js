

export var
    fftSize = 256,

    AU_T = 'audio/webm; codecs=opus',
    mimeType = "video/webm; codecs=vp8,opus",
    videoType = "video/webm; codecs=vp8",

    mdi = { exact:"" },
    vdi = { exact:"" },

    perm_mc = {name:"microphone"},
    perm_cm = {name:"camera"},
    
    ch = {a:null},

    audio = { deviceId: mdi },
    video = { deviceId: vdi },

    start_o = { video: true, audio: true },
    start_a_o = { video: false, audio: true },
    start_v_o = { video: true, audio: false },

    only_a_o = { video:false, audio },

    vdcf = { mimeType },
    vd_o = { type: mimeType },

    o = { video, audio },

    TE = new TextEncoder(),
    TD = new TextDecoder(),

    ES = "",

    not_passive = { passive: false },

    scrollTo = (
        {
            left:0,
            behavior: "smooth"
        }
    ),

    origin = [
        "",
        "",
        "http://localhost:2001",
        "http://localhost:2002",
    ],

    title = [
        "Chats | PerfoByte",
        "Chat | PerfoByte",
        "Modules | PerfoByte",
        "Settings | PerfoByte",
    ],

    EA = [],

    API_1 = new Image(),
    API_2 = new Audio(),
    API_3 = document.createElement("video"),

    AUDIO_HEIGHT = 40,
    AUDIO_MENU_WIDTH = 200,

    AUDIO_SPEED_MIN = 0.0625,
    AUDIO_SPEED_MAX = 16,

    AUDIO_MDOWN_FROM = 0.25,
    AUDIO_MDOWN_TO = 3,

    AUDIO_MDOWN_VALUE = AUDIO_MDOWN_TO - AUDIO_MDOWN_FROM,

    AUDIO_DECINC_STEP = 0.1,

    DEFAULT_LETTER_SPACING = 0,
    DEFAULT_LINE_HEIGHT = 14,
    DEFAULT_FONT_SIZE = 14,

    SECTION_AMOUNT = 4
;
