import O from '../state/O.js';
import {SECTION_AMOUNT} from '../conf/i.js';


export var
    html = document.documentElement,
    html_st = html.style,

    resize_event = new Event("resize"),
    click_event = new Event("click"),
    mouseleave_event = new MouseEvent("mouseleave"),

    loader = document.getElementById("loader"),
    loader_cl = loader.classList,

    loader_form = loader.querySelector("form"),
    
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
    ctxt_i = ctxt.querySelector(".I"),
    
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

    ntin_ts_b = document.getElementById("ntin_ts_b"),
    ntin_ts_b_s = ntin_ts_b.style,

    nt_au_se = document.getElementById("nt_au_se"),
    nt_vd_se = document.getElementById("nt_vd_se"),

    ntin_bl_el = document.getElementById("ntin_bl"),
    ntin_bl = ntin_bl_el.classList,

    ntin_ts = ntin_bl_el.querySelector("#ntin_ts"),
    ntin_V = ntin_bl_el.querySelector("#ntin > video"),

    nt_au_se_fc = nt_au_se.querySelector("option"),
    nt_vd_se_fc = nt_vd_se.querySelector("option"),

    MT_EL = tmpl.querySelector(".mt"),

    EJ_EL = tmpl.querySelector(".ej_el"),

    scrolly = (
        Array.from(document.querySelectorAll(".scrolly"))
        .sort(
            (a,b) => (
                Number(a.getAttribute("data-i")) - Number(b.getAttribute("data-i"))
            )
        )
    ),

    scrollo = Array.from(scrolly, (e) => e.querySelector(".scrollo")),
    
    ej = document.getElementById("ej"),    
    
    ej_p_el = document.getElementById("ej_p"),
    ej_p = ej_p_el.classList,

    ej_p_in = ej_p_el.querySelector(".in"),

    ej_p_list = ej_p_in.querySelector(".list"),

    MSG_IMAGE_INLINE = tmpl.querySelector(".msg_image"),

    VIEW_1 = document.getElementById("view1"),
    VIEW_1_IMG = VIEW_1.querySelector("img"),

    VIEW_1_PN = VIEW_1.querySelector(".pn").classList,

    view1_zoom_p_st = view1.querySelector(".zoom .p").style,

    outpl = document.getElementById('outpl'),
    outpl_cl = outpl.classList,

    pline = document.getElementById("pline"),

    audio_ss_b_el = outpl.querySelector(".ss_b"),
    audio_ss_b = audio_ss_b_el.classList,

    audio_menu = audio_ss_b_el.querySelector(".menu"),

    audio_st = outpl.querySelector(".st"),
    audio_st_use = audio_st.querySelector("use"),
    
    audio_vl = outpl.querySelector(".vl"),
    
    audio_pl = outpl.querySelector(".pl"),
    audio_pl_use = audio_pl.querySelector("use"),

    audio_ts = outpl.querySelector(".ts"),

    audio_ts_1 = audio_ts.firstElementChild,
    audio_ts_2 = audio_ts.querySelector(":nth-child(3)"),

    audio_vl_cl = audio_vl.classList,

    audio_pline_loaded = pline.querySelector(":nth-child(1)").style,
    audio_pline_hover  = pline.querySelector(":nth-child(2)").style,
    audio_pline_viewed = pline.querySelector(":nth-child(3)").style,
    audio_pline_cursor = pline.querySelector(":nth-child(4)").style,
    
    audio_vl_v = audio_vl.querySelector(".v"),
    audio_vl_slider = audio_vl.querySelector(".sl").style,

    audio_pbsp = document.getElementById("pbsp"),

    audio_pbsp_slider = audio_ss_b_el.querySelector(".pbsp"),

    audio_pbsp_v = audio_pbsp_slider.querySelector(".v"),
    audio_pbsp_sl = audio_pbsp_v.querySelector(".sl").style,

    audio_menu_spb_v = audio_menu.querySelector(".spb .v"),

    MSG_AUDIO_EL = tmpl.querySelector('.msg_audio'),

    SIMPLE_ICON = tmpl.querySelector(".simple_icon"),

    MODULE_TAG = tmpl.querySelector(".module.tag")
;
SIMPLE_ICON.removeAttribute("class");
MSG_EL.removeAttribute("class");
MT_EL.removeAttribute("class");
EJ_EL.removeAttribute("class");
