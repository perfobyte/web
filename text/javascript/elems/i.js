export * from "./event.js";

export var
    document = globalThis.document,

    html = document.documentElement,
    html_st = html.style,

    ctxt = document.getElementById("ctxt"),
    ctxt_i = ctxt.querySelector(".I"),

    msgs = document.getElementById("msgs"),
    msgs_ul = msgs.querySelector(".list"),
    msgs_time_ul = msgs.querySelector(".time"),

    chatbar_h1 = document.querySelector("#chatbar > h1"),

    c_av = document.getElementById("c_av").style,

    template = document.querySelector("template").content,
    MSG_EL = template.querySelector(".msg"),
    chatbar = template.querySelector(".chbr"),

    ej = document.getElementById("ej"),
    ej_p_el = document.getElementById("ej_p"),
    ej_p = ej_p_el.classList,
    ej_p_in = ej_p_el.querySelector(".in"),
    ej_p_list = ej_p_in.querySelector(".list"),

    msg_menu = document.getElementById("msg_menu"),
    msg_menu_st = msg_menu.style,
    msg_menu_cl = msg_menu.classList,

    msg_select = document.getElementById("msg_select"),
    msg_select_st = msg_select.style,
    msg_select_cl = msg_select.classList
;
