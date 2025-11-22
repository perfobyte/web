import {support_format} from '../state/i.js';

export var
    TE = new TextEncoder(),
    TD = new TextDecoder(),

    ES = "",
    EA = [],
    
    API_1 = new Image(),
    API_2 = new Audio(),
    API_3 = document.createElement("video"),
    API_CANVAS = document.createElement("canvas"),

    support_rd_o = {
        2: [support_format[2], API_2],
        3: [support_format[3], API_3]
    },

    window_event_object = {currentTarget: null}
;
