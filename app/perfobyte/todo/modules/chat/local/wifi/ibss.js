import { IBSS_PLATFORMS, Point, Platform, Protocol } from '../../../../enum/i.js';

export default {
    name: "Wi-Fi Ad-Hoc (IBSS)",

    description: (
        "Local peer-to-peer Wi-Fi chat using Ad-Hoc (IBSS) mode without access point"
    ),

    protocol: [Protocol.IBSS],

    platform: IBSS_PLATFORMS,

    search: Point.CLIENT,

    type: [
        "Communication",
        "Messaging",
        "Utilities",
        "Productivity",

        "P2P Wi-Fi Ad-Hoc Messenger",
        "Offline Wi-Fi Ad-Hoc Chat",
        "Decentralized Local Messenger",
    ],

    keywords: [
        "Wi-Fi Ad-Hoc chat",
        "IBSS messenger",
        "Offline messaging",
        "Local network messaging",
        "Direct device Wi-Fi messaging",
        "Private Ad-Hoc chat",
        "Ad-hoc Wi-Fi messaging",
        "Two-way Ad-Hoc Wi-Fi messenger"
    ],

    competitors: [
        "fire_chat",
        "local_network_messenger"
    ]
};
