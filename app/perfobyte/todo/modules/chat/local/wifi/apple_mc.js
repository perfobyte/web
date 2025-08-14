import { Point, Platform, Protocol } from '../../../../enum/i.js';

export default {
    name: "Multipeer Connectivity",

    description: (
        "Peer-to-peer local chat for iOS and macOS using Apple Multipeer Connectivity API"
    ),

    protocol: [
        Protocol.APPLE_MC,
    ],

    platform: [
        Platform.IOS,
        Platform.MACOS,
    ],

    search: Point.CLIENT,

    type: [
        "Communication",
        "Messaging",
        "Utilities",
        "Productivity",

        "P2P Multipeer Messenger",
        "Offline Multipeer Chat",
        "Proximity Messaging",
        "Decentralized Local Messenger",
    ],

    keywords: [
        "Multipeer chat",
        "Apple P2P messenger",
        "Offline messaging",
        "Local proximity messaging",
        "Direct device Multipeer messaging",
        "Private Apple chat",
        "Ad-hoc Multipeer messaging",
        "Two-way Multipeer messenger"
    ],

    competitors: [
        "briar",
        "bridgefy"
    ]
};
