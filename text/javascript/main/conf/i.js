import {document} from '../elems/i.js';

export * from './crossplatform/i.js';
export * from './linebreak/i.js';

export {default as font_faces} from './font_faces.js';

export var
    TE = new TextEncoder(),
    TD = new TextDecoder(),

    ES = "",
    
    IMAGE = new Image(),
    AUDIO = new Audio(),
    VIDEO = document.createElement("video"),
    CANVAS = document.createElement("canvas"),

    messages_fragment = document.createDocumentFragment(),
    messages_range = document.createRange(),

    CANVAS_2D_CONTEXT = CANVAS.getContext("2d"),

    window_event_object = { currentTarget: window },
    passive_false = { passive: false },

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
    ]
;
