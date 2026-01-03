import {state_alloc} from '../state/i.js'
import template_clone from '../f/general/template_clone.js';

import {element_template} from '../f/dom/element/i.js';

import {array_from_object} from '../conf/i.js';

export var
    template = document.querySelector("template").content,

    html = document.documentElement,
    html_style = html.style,
    
    body = document.body,
    body_cl = body.classList,
    
    MESSAGE_ROW_EL = template.querySelector(".message-row"),
    CURSOR_EL = template.querySelector(".regular-cursor"),
    REGULAR_INPUT_EL = template.querySelector(".regular-input"),
    REGULAR_TEXTAREA_EL = template.querySelector(".regular-textarea"),

    text_width_container = (MESSAGE_ROW_EL.cloneNode(true).firstElementChild),
    default_row_inline_class = text_width_container.className,

    scrollbar_x = document.getElementById("scrollbar-x"),
    scrollbar_y = document.getElementById("scrollbar-y"),

    scrollbar_thumb_x = document.getElementById("scrollbar-thumb-x"),
    scrollbar_thumb_y = document.getElementById("scrollbar-thumb-y"),

    scrollbar_thumb_x_style = scrollbar_thumb_x.style,
    scrollbar_thumb_y_style = scrollbar_thumb_y.style,

    list = document.getElementById("list"),

    cursors = document.getElementById("cursors"),
    inputs = document.getElementById("inputs"),
    textareas = document.getElementById("textareas"),

    content = list.firstElementChild,
    content_style = content.style,
    
    scrollbar_thumb = [scrollbar_thumb_x,scrollbar_thumb_y],
    
    elements_block = Array(state_alloc.size_elems).fill(MESSAGE_ROW_EL),

    elements = Array.from(elements_block, element_template),

    elems_cursor = Array(state_alloc.size_elems_cursor).fill(null),

    elems_input = Array(state_alloc.size_elems_input).fill(null),
    elems_textarea = Array(state_alloc.size_elems_textarea).fill(null),

    main = {
        id_cursor: 0,
        element_cursor: null,
        element_cursor_classlist: null,

        id_input: 0,
        element_input: null,
        
        id_textarea: 0,
        element_textarea: null,
    }
;

text_width_container.setAttribute("id","text-width-container");
body.appendChild(text_width_container);

export * from "./event.js"
