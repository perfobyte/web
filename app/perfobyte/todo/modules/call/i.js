import webrtc from './webrtc.js';

import udp from "./udp.js";
import bluetooth from './bluetooth.js';

import {
    wifi_direct,
    wifi_ibss,
    wifi_apple_mc,
} from './wifi/i.js';

import voip from './voip.js';

var
    ALL = [
        webrtc,    
    ],

    NATIVE = [
        udp,
        bluetooth,

        wifi_direct,
        wifi_ibss,
        wifi_apple_mc,

        voip,
    ]
;

export default [
    ...ALL,
    ...NATIVE,
];
