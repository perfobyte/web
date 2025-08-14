import { IBSS_PLATFORMS, Platform, Protocol, all_platforms, NONE, Point } from '../../../enum/i.js';

export default {
    name: "IBSS (Ad-hoc)",

    description: (
        "Peer-to-peer voice and video calls directly between clients over IBSS (Wi-Fi Ad-hoc), "
        + "without encryption and without routing media through central servers."
    ),

    protocol: [
        Protocol.IBSS,
    ],
    
    platform: IBSS_PLATFORMS,

    type: [
        "Communication",
        "Voice",
        "Video",
        "Telephony",
        "Peer-to-peer",
        "Ad-hoc networking",
        "Real-time communication"
    ],

    keywords: [
        "IBSS",
        "Ad-hoc Wi-Fi",
        "P2P calls",
        "Video call",
        "Voice call",
        "Direct connection",
        "Low-latency call",
        "Peer-to-peer voice",
        "Peer-to-peer video",
        "Real-time streaming"
    ],

    competitors: [
        "Custom P2P apps",
        "Ad-hoc network utilities"
    ],
};