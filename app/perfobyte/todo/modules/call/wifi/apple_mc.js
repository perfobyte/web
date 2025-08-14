import { APPLE_PLATFORMS, Platform, Protocol, all_platforms, NONE, Point } from '../../../enum/i.js';

export default {
    name: "Multipeer Connectivity",

    description: (
        "Peer-to-peer voice and video calls directly between nearby Apple devices using Multipeer Connectivity, "
        + "without routing media through central servers. Requires iOS/macOS devices in proximity."
    ),

    protocol: [
        Protocol.APPLE_MC,
    ],
    
    platform: APPLE_PLATFORMS,
    
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
        "Multipeer Connectivity",
        "P2P calls",
        "Video call",
        "Voice call",
        "Direct connection",
        "Low-latency call",
        "Ad-hoc network",
        "Peer-to-peer voice",
        "Peer-to-peer video",
        "Real-time streaming",
        "Nearby Apple devices"
    ],

    competitors: [
        "AirDrop-based apps",
        "Custom P2P apps for iOS/macOS",
        "Local multiplayer or communication apps on Apple devices"
    ],
}
