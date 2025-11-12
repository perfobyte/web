export * from "./event.js";

export var
    document = globalThis.document,
    window = globalThis.window,
    console = globalThis.console,

    html = document.documentElement,
    html_st = html.style,

    body = document.body,
    body_cl = body.classList,

    ctxt = document.getElementById("ctxt"),
    ctxt_i = ctxt.querySelector(".I"),

    msgs_list = document.getElementById("list"),
    msgs_time_ul = document.getElementById("time"),

    chatbar_h1 = document.querySelector("#chatbar > h1"),

    c_av = document.getElementById("c_av").style,

    template = document.querySelector("template").content,
    MSG_EL = template.querySelector(".msg"),
    MT_EL = template.querySelector(".mt"),
    chatbar = template.querySelector(".chbr"),
    
    msg_menu = document.getElementById("msg_menu"),
    msg_menu_st = msg_menu.style,
    msg_menu_cl = msg_menu.classList,

    msg_select = document.getElementById("msg_select"),
    msg_select_st = msg_select.style,
    msg_select_cl = msg_select.classList,

    ej_open_button = document.getElementById('ej')
;
