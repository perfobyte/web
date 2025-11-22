export * from "./event.js";

export var
    document = globalThis.document,
    window = globalThis.window,
    console = globalThis.console,

    template = document.querySelector("template").content,

    html = document.documentElement,
    html_style = html.style,

    body = document.body,
    body_cl = body.classList,

    list = document.getElementById("list"),
    
    MESSAGE_EL = template.querySelector(".message"),
    MESSAGE_ROW_EL = template.querySelector(".message_row")
;
