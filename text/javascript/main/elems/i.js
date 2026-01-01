import {alloc_state} from '../state/i.js'
import template_clone from '../f/general/template_clone.js';

import {element_template} from '../f/dom/element/i.js';

import {array_from_object} from '../conf/i.js';

export var
    template = document.querySelector("template").content,

    html = document.documentElement,
    html_style = html.style,
    
    body = document.body,
    body_cl = body.classList,
    
    MESSAGE_ROW_EL = template.querySelector(".message_row"),
    CURSOR_EL = template.querySelector(".cursor"),

    text_width_container = (MESSAGE_ROW_EL.cloneNode(true).firstElementChild),
    default_row_inline_class = text_width_container.className,

    scrollbar_x = document.getElementById("scrollbar_x"),
    scrollbar_y = document.getElementById("scrollbar_y"),

    scrollbar_thumb_x = document.getElementById("scrollbar_thumb_x"),
    scrollbar_thumb_y = document.getElementById("scrollbar_thumb_y"),

    scrollbar_thumb_x_style = scrollbar_thumb_x.style,
    scrollbar_thumb_y_style = scrollbar_thumb_y.style,

    list = document.getElementById("list"),
    cursors = document.getElementById("cursors"),

    content = list.firstElementChild,
    content_style = content.style,
    
    scrollbar_thumb = [scrollbar_thumb_x,scrollbar_thumb_y],
    
    elements_block = Array(alloc_state.size_elements).fill(MESSAGE_ROW_EL),

    elements = Array.from(elements_block, element_template),

    cursor_elems = Array(alloc_state.size_cursor_elements).fill(null)
;

text_width_container.setAttribute("id","text_width_container");
body.appendChild(text_width_container);

export * from "./event.js"
