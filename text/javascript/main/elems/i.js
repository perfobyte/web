import {state_alloc} from '../state/i.js'
import template_clone from '../f/general/template_clone.js';

import {Token} from '../f/dom/element/i.js';

import {array_from_object} from '../conf/i.js';

export var
    template = document.querySelector("template").content,

    html = document.documentElement,
    html_style = html.style,
    
    body = document.body,
    body_cl = body.classList,
    
    ROW_EL = template.querySelector(".row"),
    TOKEN_EL = template.querySelector(".token"),
    CURSOR_EL = template.querySelector(".cursor"),
    REGULAR_INPUT_EL = template.querySelector(".input"),
    REGULAR_TEXTAREA_EL = template.querySelector(".textarea"),
    SELECTION_EL = template.querySelector(".selection"),

    text_width_row = ROW_EL.cloneNode(true),
    text_width_container = (text_width_row.firstElementChild),
    default_row_inline_class = text_width_container.className,

    scrollbar_x = document.getElementById("scrollbar-x"),
    scrollbar_y = document.getElementById("scrollbar-y"),

    scrollbar_thumb_x = document.getElementById("scrollbar-thumb-x"),
    scrollbar_thumb_y = document.getElementById("scrollbar-thumb-y"),

    scrollbar_thumb_x_style = scrollbar_thumb_x.style,
    scrollbar_thumb_y_style = scrollbar_thumb_y.style,

    list = document.getElementById("list"),

    list_cursors = document.getElementById("cursors"),
    list_inputs = document.getElementById("inputs"),
    list_textareas = document.getElementById("textareas"),
    list_selections = document.getElementById("selections"),

    content = list.firstElementChild,
    content_style = content.style,
    
    scrollbar_thumb = [scrollbar_thumb_x,scrollbar_thumb_y]
;

text_width_row.setAttribute("id","text-width-container");
body.appendChild(text_width_row);

export * from "./event.js"
