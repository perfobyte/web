import { Point, Platform, Protocol } from '../../../../enum/i.js';

export default {
    name: "Wi-Fi Aware / NAN",

    description: (
        "Proximity-based peer-to-peer chat using Wi-Fi Aware (NAN) for device discovery and messaging"
    ),

    protocol: [Protocol.AWARE],

    platform: [
        Platform.ANDROID,
        Platform.LINUX,
    ],

    search: Point.CLIENT,

    type: [
        "Communication",
        "Messaging",
        "Utilities",
        "Productivity",

        "P2P Wi-Fi Aware Messenger",
        "Offline Wi-Fi Aware Chat",
        "Proximity Messaging",
        "Decentralized Local Messenger",
    ],

    keywords: [
        "Wi-Fi Aware chat",
        "NAN messenger",
        "Offline messaging",
        "Local proximity messaging",
        "Direct device Wi-Fi messaging",
        "Private Wi-Fi Aware chat",
        "Ad-hoc Wi-Fi messaging",
        "Two-way Wi-Fi Aware messenger"
    ],

    competitors: [
        "fire_chat",
        "bridgefy"
    ]
};
