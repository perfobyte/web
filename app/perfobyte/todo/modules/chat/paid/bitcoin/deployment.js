
import { NATIVE_PLATFORMS, Requirement, Point, Platform, Protocol } from '../../../../enum/i.js';

export default {
    name: "Bitcoin deployment",

    description: (
        "Module for deploying and managing a Bitcoin node for peer-to-peer encrypted messaging, "
        + "leveraging OP_RETURN transactions for message transport. "
        + "Supports optional self-hosted full nodes or public nodes for relaying messages."
    ),

    requirement: [
        Requirement.VERIFICATION,
    ],

    protocol: [
        Protocol.RPC,
        Protocol.ZMQ,
    ],

    platform: NATIVE_PLATFORMS,

    search: Point.CLIENT,

    type: [
        "Infrastructure",
        "Node deployment",
        "Blockchain-based communication",
        "Messaging backend",
        "Decentralized network",
        "Peer-to-peer",
        "Bitcoin OP_RETURN messaging",
        "Privacy-focused chat",
        "Self-hosted node management"
    ],

    keywords: [
        "Bitcoin node",
        "Node deployment",
        "P2P messaging",
        "OP_RETURN",
        "Decentralized chat",
        "Encrypted messages",
        "Privacy",
        "Self-hosted node",
        "ZMQ notifications",
        "Blockchain messaging",
        "Peer-to-peer",
        "Message relay",
        "Hybrid chat",
        "Node management",
        "Bitcoin backend"
    ],

    competitors: [
        "Twetch",
        "Sphinx",
        "Strike",
        "Blockstream Green Chat",
        "WhatsOnChain",
    ]
};
