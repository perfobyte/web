import { DIRECT_PLATFORMS, Point, Platform, Protocol } from '../../../../enum/i.js';


export default {
    name: "Wi-Fi Direct (P2P)",

    description: (
        "Peer-to-peer Wi-Fi chat using Wi-Fi Direct without requiring a router"
    ),

    protocol: [Protocol.DIRECT],

    platform: DIRECT_PLATFORMS,

    search: Point.CLIENT,

    type: [
        "Communication",
        "Messaging",
        "Utilities",
        "Productivity",

        "P2P Wi-Fi Direct Messenger",
        "Offline Wi-Fi Direct Chat",
        "Decentralized Local Messenger",
    ],

    keywords: [
        "Wi-Fi Direct chat",
        "P2P Wi-Fi messenger",
        "Offline messaging",
        "Local Wi-Fi Direct communication",
        "Direct device Wi-Fi messaging",
        "Private Wi-Fi Direct chat",
        "Ad-hoc Wi-Fi messaging",
        "Two-way Wi-Fi Direct messenger"
    ],

    competitors: [
        "bridgefy",
        "fire_chat"
    ],
};
