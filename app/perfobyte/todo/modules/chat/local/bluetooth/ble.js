import { Point, Platform, Protocol, all_platforms } from '../../../../enum/i.js';

export default {
    name: "Bluetooth Low Energy",

    description: (
        "Bluetooth Low Energy peer-to-peer encrypted local chat using GATT services and characteristics"
    ),

    protocol: [
        Protocol.GATT,
    ],

    platform: all_platforms,

    search: Point.CLIENT,

    type: [
        "Communication",
        "Messaging",
        "Social Networking",
        "Utilities",
        "Productivity",

        "P2P BLE Messenger",
        "Offline BLE Messaging",
        "Bluetooth Low Energy Chat",
        "Proximity Messaging",
        "Decentralized Local Messenger",
    ],

    keywords: [
        "Bluetooth Low Energy chat",
        "BLE messenger",
        "GATT chat",
        "Offline",
        "BLE file transfer",
        "Secure BLE calls",
        "Offline voice chat over BLE",
        "BLE media sharing",
        "BLE audio call",
        "BLE video call",

        "Direct device BLE messaging",
        "Private BLE chat",
        "No internet messenger",
        "Local BLE communication",
        "Secure offline chat",
        "Ad-hoc BLE messaging",
        "Two-way BLE messenger"
    ],

    competitors: [
        "nrf_toolbox",
        "light_blue",
        "bluefy",
        "web_bluetooth_chat_examples",
    ]
};
