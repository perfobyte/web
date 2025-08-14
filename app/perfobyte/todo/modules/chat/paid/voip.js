import { Point, Platform, Protocol, all_platforms, Mode, } from '../../../enum/i.js';

export default {
    name: "VoIP (SMS and calls via cellular network)",

    description: (
        "Peer-to-peer voice and video calls using WebRTC with WebSocket signaling "
        +"and SIP/PSTN gateway for calling regular phone numbers"
    ),

    protocol: [
        Protocol.WEB_SOCKET,
        Protocol.SIP,
    ],

    platform: all_platforms,

    search: Point.CLIENT,

    type: [
        "Communication",
        "Voice",
        "Video",
        "Telephony",
        "Utilities",
        "Productivity",

        "P2P WebRTC calls",
        "VoIP over WebSocket",
        "PSTN gateway calls",
        "Hybrid online/offline calls",
        "Decentralized calling"
    ],

    keywords: [
        "VoIP",
        "WebRTC",
        "PSTN gateway",
        "SIP trunk",
        "Voice call",
        "Video call",
        "WebSocket signaling",
        "Secure voice",
        "Encrypted calls",
        "Phone number calls",
        "Softphone",
        "Peer-to-peer calls",
        "Hybrid VoIP",
        "SIP integration",
        "TURN server",
        "STUN server"
    ],

    competitors: [
        "twilio",
        "voximplant",
        "signalwire",
        "asterisk",
        "freeswitch",
        "linphone",
    ]
};
