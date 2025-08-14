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

    msgs = document.getElementById("msgs"),

    tmpl = document.getElementById("tmpl"),

    cl_dv = tmpl.querySelector(".cl_dv"),

    call_icons = tmpl.querySelectorAll(".c_i > svg"),
    cbr = tmpl.querySelector(".cbr"),
    chatbar = tmpl.querySelector(".chbr"),

    call_ul = document.querySelector("#c1 > div > ul"),

    create = document.getElementById("create").classList,

    sn = document.getElementById("sn"),
    ct = document.getElementById("c"),

    b = document.querySelectorAll("#nv .n"),

    CHA = document.getElementById("cha"),
    chap = document.getElementById("chap"),

    

    ctxt = document.getElementById("ctxt"),
    
    msgs_ul = msgs.querySelector(".list"),

    msgbr = tmpl.querySelector(".msgbr"),

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

    call_el = document.getElementById("call"),
    call_cl = call_el.classList,
    
    cl_i = document.getElementById("cl_i"),
    cl_i_cl = cl_i.classList,
    
    cl_i_v = cl_i.querySelector("video"),
    cl_i_a = cl_i.querySelector("audio"),

    cl_u = document.getElementById("cl_u"),
    cl_u_cl = cl_u.classList,
    
    cl_u_v = cl_u.querySelector("video"),
    cl_u_a = cl_u.querySelector("audio"),

    cl_sh = document.getElementById("cl_sh").classList,
    
    cl_i_sh = document.getElementById("cl_i_sh"),
    cl_u_sh = document.getElementById("cl_u_sh"),

    cl_vo = document.getElementById("cl_vo"),
    cl_vo_p = cl_vo.querySelector("div"),
    cl_vo_p_st = cl_vo_p.style,

    cl_dlist = document.getElementById("cl_dlist"),
    cl_dlist_p = cl_dlist.querySelector('p'),
    cl_dlist_ul = cl_dlist.querySelector("ul"),
    cl_dlist_cl = cl_dlist.classList,

    cl_mc_d = document.getElementById("cl_mc_d"),
    cl_vd_d = document.getElementById("cl_vd_d"),
    cl_sh_d = document.getElementById("cl_sh_d"),
    
    cl_mc_d_cl = cl_mc_d.classList,
    cl_vd_d_cl = cl_vd_d.classList,
    cl_sh_d_cl = cl_sh_d.classList,

    b_dv_cl_sh = document.querySelector("#cl_panel .b_dv.cl_sh"),
    b_dv_cl_sh_cl = b_dv_cl_sh.classList,
    
    el_cache = {
        bi: b[O.I].classList,
        ctx_menu_i:0,
    }
;
