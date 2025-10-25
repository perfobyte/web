import { NATIVE_PLATFORMS, Platform, Protocol, all_platforms, NONE, Point } from '../../enum/i.js';

export default {
    name: "VoIP",

    description: (
        "Hybrid voice and video calls over WebRTC for internet and PSTN for regular phone numbers, "
        + "enabling seamless communication across networks."
    ),

    protocol: [
        Protocol.UDP,
        Protocol.PSTN,
    ],
    
    platform: NATIVE_PLATFORMS,


    type: [
        "Communication",
        "Voice",
        "Video",
        "Telephony",
        "Hybrid calling",
        "Internet and PSTN",
        "Real-time communication",
        "P2P and network calls"
    ],

    keywords: [
        "VoIP",
        "Hybrid calls",
        "WebRTC",
        "PSTN",
        "Phone call",
        "Video call",
        "Voice call",
        "Direct connection",
        "Real-time communication",
        "Secure calls",
        "Low-latency calls",
        "Internet calls",
        "Cellular network calls"
    ],

    competitors: [
        "twilio",
        "voximplant",
        "signal_wire",
        "linphone",
        "asterisk",
        "free_switch"
    ],
};
