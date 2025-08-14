import O from "../state/O.js";


export var
    perm_cm = {name:"camera"},
    perm_mc = {name:"microphone"},
    
    mimeType = "video/webm; codecs=vp8,opus",
    videoType = "video/webm; codecs=vp8",

    ch = {a:null},

    vdcf = { mimeType },
    vd_o = { type: mimeType },

    mdi = { exact:"" },
    vdi = { exact:"" },

    audio = { deviceId: mdi },
    video = { deviceId: vdi },

    current = {
        a: null,
        b: null,
    },

    start_o = { video: true, audio: true },
    start_a_o = { video: false, audio: true },
    start_v_o = { video: true, audio: false },

    o = { video, audio },
    only_v_o = { video, audio:false },
    only_a_o = { video:false, audio },

    fftSize = 256
;