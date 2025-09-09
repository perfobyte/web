

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

    not_passive = { passive: false }
;
