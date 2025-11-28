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
    MESSAGE_ROW_EL = template.querySelector(".message_row"),

    text_width_container = document.getElementById('text_width_container'),

    scrollbar_x = document.getElementById("scrollbar_x"),
    scrollbar_y = document.getElementById("scrollbar_y"),

    scrollbar_thumb_x = document.getElementById("scrollbar_thumb_x"),
    scrollbar_thumb_y = document.getElementById("scrollbar_thumb_y"),

    scrollbar_thumb_x_style = scrollbar_thumb_x.style,
    scrollbar_thumb_y_style = scrollbar_thumb_y.style,

    scrollbar_thumb = [
        scrollbar_thumb_x,
        scrollbar_thumb_y,
    ]
;
