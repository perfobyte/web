import {alloc_state} from '../state/i.js'
import template_clone from '../f/general/template_clone.js';
import {array_from_object} from '../conf/i.js';

export var
    template = document.querySelector("template").content,

    html = document.documentElement,
    html_style = html.style,
    
    body = document.body,
    body_cl = body.classList,
    
    MESSAGE_ROW_EL = template.querySelector(".message_row"),

    text_width_container = document.getElementById('text_width_container'),

    scrollbar_x = document.getElementById("scrollbar_x"),
    scrollbar_y = document.getElementById("scrollbar_y"),

    scrollbar_thumb_x = document.getElementById("scrollbar_thumb_x"),
    scrollbar_thumb_y = document.getElementById("scrollbar_thumb_y"),

    scrollbar_thumb_x_style = scrollbar_thumb_x.style,
    scrollbar_thumb_y_style = scrollbar_thumb_y.style,

    list = document.getElementById("list"),

    content = list.firstElementChild,
    content_style = content.style,
    
    scrollbar_thumb = [scrollbar_thumb_x,scrollbar_thumb_y],
    
    elements_block = Array(alloc_state.size_elements).fill(MESSAGE_ROW_EL),

    elements = Array.from(elements_block,template_clone)
;

export * from "./event.js"
