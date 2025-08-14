import {Point, Platform, Protocol, } from '../../../../enum/i.js';

export default {
    name: "Two-way Bluetooth",

    description: (
        "Bluetooth peer-to-peer encrypted local chat based on RFCOMM protocol"
    ),

    protocol: [
        Protocol.RFCOMM,
    ],

    platform: [
        Platform.MACOS,
        Platform.WINDOWS,
        Platform.LINUX,
        Platform.ANDROID,
    ],

    search: Point.CLIENT,

    type: [
        "Communication",
        "Messaging",
        "Social Networking",
        "Utilities",
        "Productivity",
        
        "P2P Bluetooth Messenger",
        "Offline Bluetooth Messaging",
        "Bluetooth Proximity Chat",
        "Decentralized Local Messenger",
    ],

    keywords: [
        "Bluetooth chat",
        "Peer-to-peer messenger",
        "Offline",
        "RFCOMM chat",
        "File transfer Bluetooth",
        "Secure Bluetooth calls",
        "Offline voice chat",
        "Bluetooth media sharing",
        "Bluetooth audio call",
        "Bluetooth video call",

        "Direct device messaging",
        'Private Bluetooth chat',
        'No internet messenger',
        'Local Bluetooth communication',
        'Secure offline chat',
        'Ad-hoc Bluetooth messaging',
        'Two-way Bluetooth messenger'
    ],

    competitors: [
        "bridgefy",
        "briar",
        "fire_chat",
        "bluetooth file transfer app",
    ]
};
