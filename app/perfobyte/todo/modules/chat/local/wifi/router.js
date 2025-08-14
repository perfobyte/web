import { Point, Platform, Protocol, all_platforms, } from '../../../../enum/i.js';

export default {
    name: 'TCP/IP over local Wi-Fi router/hotspot (Infrastructure mode)',

    description: (
        "Wi-Fi peer-to-peer or local network chat over TCP/IP in infrastructure mode"
    ),

    protocol: [Protocol.TCP],

    platform: all_platforms,
    search: Point.CLIENT,

    type: [
        "Communication",
        "Messaging",
        "Social Networking",
        "Utilities",
        "Productivity",

        "P2P Wi-Fi Messenger",
        "Offline Wi-Fi Messaging",
        "Local Wi-Fi Chat",
        "Decentralized Local Messenger",
    ],

    keywords: [
        "Wi-Fi chat",
        "TCP/IP messenger",
        "Offline",
        "Local network messaging",
        "Secure Wi-Fi calls",
        "Offline voice chat over Wi-Fi",
        "Wi-Fi media sharing",
        "Wi-Fi audio call",
        "Wi-Fi video call",

        "Direct device Wi-Fi messaging",
        "Private Wi-Fi chat",
        "No internet messenger",
        "Local Wi-Fi communication",
        "Secure offline chat",
        "Ad-hoc Wi-Fi messaging",
        "Two-way Wi-Fi messenger"
    ],

    competitors: [
        "bridgefy",
        "briar",
        "fire_chat",
        "local_network_messenger"
    ]
};

