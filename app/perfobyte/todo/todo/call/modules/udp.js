

import { NATIVE_PLATFORMS, Platform, Protocol, all_platforms, NONE, Point } from '../../enum/i.js';

export default {
    name: "Clear UDP (P2P)",

    description: (
        "Peer-to-peer voice and video calls directly between clients using raw UDP sockets, "
        + "without encryption and without routing media through central servers."
    ),

    protocol: [
        Protocol.UDP,
    ],
    
    platform: NATIVE_PLATFORMS,

    type: [
        "Communication",
        "Voice",
        "Video",
        "Telephony",
        "Peer-to-peer",
        "Low-level networking",
        "Real-time communication"
    ],

    keywords: [
        "UDP",
        "P2P calls",
        "Video call",
        "Voice call",
        "Direct connection",
        "Low-latency call",
        "Raw socket communication",
        "Peer-to-peer voice",
        "Peer-to-peer video",
        "Real-time streaming"
    ],

    competitors: [
        "Linphone (UDP mode)",
        "Mumble (UDP mode)",
        "Custom P2P apps"
    ],
};
