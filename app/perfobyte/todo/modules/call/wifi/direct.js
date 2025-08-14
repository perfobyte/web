
import { DIRECT_PLATFORMS, Platform, Protocol, all_platforms, NONE, Point } from '../../../enum/i.js';

export default {
    name: "Wi-Fi Direct",

    description: (
        "Peer-to-peer voice and video calls directly between clients over Wi-Fi Direct, "
        + "without encryption and without routing media through central servers."
    ),

    protocol: [
        Protocol.DIRECT,
    ],
    
    platform: DIRECT_PLATFORMS,
    
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
        "Wi-Fi Direct",
        "P2P calls",
        "Video call",
        "Voice call",
        "Direct connection",
        "Low-latency call",
        "Ad-hoc network",
        "Peer-to-peer voice",
        "Peer-to-peer video",
        "Real-time streaming"
    ],

    competitors: [
        "Custom P2P apps",
        "File sharing apps with Direct call features"
    ],
}