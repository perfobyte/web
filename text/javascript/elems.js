import O from './state/O.js';

export var
    html = document.documentElement,

    resize_event = new Event("resize"),
    click_event = new Event("click"),

    loader = document.getElementById("loader"),
    loader_cl = loader.classList,
    
    chatbar_h1 = document.querySelector("#chatbar > h1"),

    c_av = document.getElementById("c_av").style,

    rl = document.getElementById("rl"),
    rl_cl = rl.classList,

    msgs = document.getElementById("msgs"),

    tmpl = document.querySelector("template").content,

    MSG_EL = tmpl.querySelector(".msg"),
    
    chatbar = tmpl.querySelector(".chbr"),

    create = document.getElementById("create").classList,
    
    ct = document.getElementById("c"),

    b = document.querySelectorAll("#nv .n"),

    CHA = document.getElementById("cha"),
    chap = document.getElementById("chap"),

    ctxt = document.getElementById("ctxt"),
    
    msgs_ul = msgs.querySelector(".list"),

    msgbr = tmpl.querySelector(".msgbr"),

    ap = document.getElementById("ap"),

    file = ap.querySelector("input[type=\"file\"].a"),

    modules_ul = document.querySelector("#c2 ul"),
    mdbr = tmpl.querySelector(".mdbr"),

    chat_menu = document.getElementById("chat_menu"),
    
    msg_menu = document.getElementById("msg_menu"),

    msg_menu_st = msg_menu.style,
    msg_menu_cl = msg_menu.classList,

    chat_menu_time = chat_menu.querySelector(".t"),

    msgs_time_ul = msgs.querySelector(".time"),

    msg_select = document.getElementById("msg_select"),
    msg_select_st = msg_select.style,
    msg_select_cl = msg_select.classList,

    canvas = document.querySelector('#ap > canvas'),

    el_cache = {
        bi: b[O.I].classList,
        ctx_menu_i:0,
    },
    
    nt_se = document.getElementById("nt_se"),
    
    mc_se = document.getElementById("mc_se"),
    mc_se_fc = mc_se.querySelector("option"),
    
    mc = document.getElementById("mc"),
    nt = document.getElementById("nt"),

    ntin = document.getElementById("ntin"),
    ntin_video = ntin.querySelector("video"),

    mcin_t = rl.querySelector("#mcin > span"),
    mcin_b_s = rl.querySelector("#mcin_b").style,

    nt_au_se = document.getElementById("nt_au_se"),
    nt_vd_se = document.getElementById("nt_vd_se"),

    ntin_bl_el = document.getElementById("ntin_bl"),
    ntin_bl = ntin_bl_el.classList,

    ntin_ts = ntin_bl_el.querySelector("#ntin_ts"),
    ntin_V = ntin_bl_el.querySelector("#ntin > video"),

    nt_au_se_fc = nt_au_se.querySelector("option"),
    nt_vd_se_fc = nt_vd_se.querySelector("option"),

    

    MT_EL = tmpl.querySelector(".mt")
;
