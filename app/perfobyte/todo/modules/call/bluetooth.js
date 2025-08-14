

import { NATIVE_PLATFORMS, Platform, Protocol, all_platforms, NONE, Point } from '../../enum/i.js';

export default {
    name: "Bluetooth",

    description: (
        "Peer-to-peer voice calls over Bluetooth using RFCOMM or standard audio profiles (HFP/A2DP). "
        + "Allows direct audio streaming between devices without routing through central servers. "
        + "Quality and latency depend on the Bluetooth profile and device capabilities."
    ),

    protocol: [
        Protocol.HFP,
        Protocol.A2DP,
    ],
    
    platform: NATIVE_PLATFORMS,
    
    type: [
        "Communication",
        "Voice",
        "Telephony",
        "Peer-to-peer",
        "Ad-hoc networking",
        "Real-time communication",
        
        "HFP supports mono, low-bitrate voice calls.",
        "A2DP supports stereo audio but only one-way streaming.",
        "RFCOMM allows custom audio streaming but requires manual encoding/decoding.",
        "Performance varies by device and Bluetooth version."
    ],

    keywords: [
        "Bluetooth P2P",
        "RFCOMM call",
        "HFP voice call",
        "A2DP streaming",
        "Direct connection",
        "Low-latency call",
        "Peer-to-peer voice",
        "Ad-hoc network",
        "Real-time audio"
    ],

    competitors: [
        "Standard phone calls",
        "VoIP apps",
        "Custom P2P Bluetooth apps"
    ],
};
