
var
    cm_sh_el = document.getElementById("cm_sh")
;
export var
    camera = document.getElementById("camera"),
    camera_cl = camera.classList,
    
    
    cm_sh = cm_sh_el.classList,
    cm_sh_bt = cm_sh_el.querySelector("button"),

    cm_aud = document.getElementById("cm_aud"),
    cm_aud_cl = cm_aud.classList,
    cm_aud_ul = cm_aud.querySelector("ul"),

    cm_au = document.getElementById("cm_au"),
    cm_au_cl = cm_au.classList,

    AUDV = document.querySelector("#tmpl .audv"),

    cm_ts = document.getElementById("cm_ts"),
    cm_ts_cl = cm_ts.classList,

    cm_pl_cl = document.getElementById("cm_pl").classList,

    cm_pa = document.getElementById("cm_pa"),

    V = camera.querySelector("video"),

    ce1 = document.querySelector("#cm_ce > :nth-child(1)"),
    ce2 = document.querySelector("#cm_ce > :nth-child(2)"),

    canvas = document.querySelector('#ap > canvas'),


    mc_se = document.getElementById("mc_se"),
    nt_se = document.getElementById("nt_se"),

    mc = document.getElementById("mc"),
    nt = document.getElementById("nt"),

    ntin = document.getElementById("ntin"),
    ntin_video = ntin.querySelector("video"),

    rl = document.getElementById("rl"),

    rl_cl = rl.classList,
    mcin_t = rl.querySelector("#mcin > span"),
    mcin_b_s = rl.querySelector("#mcin_b").style,

    nt_au_se = document.getElementById("nt_au_se"),
    nt_vd_se = document.getElementById("nt_vd_se"),


    ntin_bl_el = document.getElementById("ntin_bl"),
    ntin_bl = ntin_bl_el.classList,

    ntin_ts = ntin_bl_el.querySelector("#ntin_ts"),
    ntin_V = ntin_bl_el.querySelector("#ntin > video")
;