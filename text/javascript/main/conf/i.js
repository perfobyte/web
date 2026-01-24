import {state_alloc as A} from '../state/i.js';
import {TOKEN_EL} from "../elems/i.js";

export * from './crossplatform/i.js'
export * from './linebreak/i.js'
export * from './param/i.js';
export * from './polyfill/i.js';

export * from './arrays/i.js';
export * as arrays from './arrays/i.js';

export var
    
    node_text = TOKEN_EL.cloneNode(true),
    
    TE = new TextEncoder(),
    TD = new TextDecoder("utf8"),

    ES = "",
    
    IMAGE = new Image(),
    AUDIO = new Audio(),
    VIDEO = document.createElement("video"),
    CANVAS = document.createElement("canvas"),

    fragment = document.createDocumentFragment(),
    range = document.createRange(),

    CANVAS_2D_CONTEXT = CANVAS.getContext("2d"),

    window_event_object = { currentTarget: window },
    passive_false = { passive: false },
    prevent_scroll = { preventScroll: true },
 
    x_move_event = {
        currentTarget: window,
        movementX: 0,
    },

    y_move_event = {
        currentTarget: window,
        movementY: 0,
    },

    xy_move_event = [
        x_move_event,
        y_move_event,
    ],

    workers = Array(1).fill(null),
    font_faces = Array(1).fill(null),

    array_from_object = {length:0},

    separation_result = {
        string_offset: 0,
        char_i: 0,
    }
;
