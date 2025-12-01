export * from './crossplatform.js';

export var
    TE = new TextEncoder(),
    TD = new TextDecoder(),

    ES = "",
    EA = [],
    
    IMAGE = new Image(),
    AUDIO = new Audio(),
    VIDEO = document.createElement("video"),

    CANVAS = document.createElement("canvas"),
    CANVAS_2D_CONTEXT = CANVAS.getContext("2d"),

    window_event_object = {currentTarget: window},
    passive_false = { passive: false },
    
    default_lines = [[0,0]],

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
