import { Platform, Protocol, all_platforms, NONE, Point } from '../../enum/i.js';

export default {
    name: "WebRTC (P2P)",

    description:(
        "Peer-to-peer voice and video calls directly between clients using WebRTC, "
        + "without routing media through central servers."
    ),

    protocol: [
        Protocol.WEB_RTC
    ],
    
    platform: all_platforms,

    type: [
        "Communication",
        "Voice",
        "Video",
        "Telephony",
        "Peer-to-peer",
        "Decentralized calling",
        "Real-time communication"
    ],

    keywords: [
        "WebRTC",
        "P2P calls",
        "Video call",
        "Voice call",
        "Direct connection",
        "Encrypted call",
        "Real-time communication",
        "Secure voice",
        "Secure video",
        "Low-latency call",
        "Peer-to-peer voice",
        "Peer-to-peer video"
    ],

    competitors: [
        "Jitsi",
        "Linphone",
        "Signal",
        "Zoom",
        "Skype",
        "Mumble",
        "Tox"
    ],
};
