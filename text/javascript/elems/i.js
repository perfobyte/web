export * from "./event.js";

export var
    document = globalThis.document,
    window = globalThis.window,
    console = globalThis.console,

    template = document.querySelector("template").content,

    html = document.documentElement,
    html_st = html.style,

    body = document.body,
    body_cl = body.classList,

    list = document.getElementById("list"),
    
    MSG_EL = template.querySelector(".msg")
;
