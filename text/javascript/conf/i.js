
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

    window_event_object = {currentTarget: null},
    passive_false = { passive: false },
    
    default_lines = [[0,0]]
;
