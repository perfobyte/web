import {Requirement, Protocol, all_platforms, Point} from '../../../enum/i.js';

export default {
    name: "Secure",

    description: "E2E-encrypted chat",

    protocol: [
        Protocol.WEB_SOCKET,
    ],

    platform: all_platforms,

    search: Point.CLIENT,
    
    requirement: [
        Requirement.VERIFICATION,
    ],

    type: [
        "Secure Messaging Application",
        "End-to-End Encrypted Messaging App",
        "Private Messenger",
        "Confidential Communication Tool",
        "Secure Communication Platform",
        "Encrypted Chat Application",

        "Secure Instant Messaging (SIM)",
        
        "Communication",
        "Social Networking",
        "secure",
        "private",
    ],

    keywords: [
        "End-to-End Encryption",
        "E2E chat",
        "Secure messaging",
        "Private messaging",
        "Encrypted chat",
        "Zero-knowledge chat",
        "Confidential messaging",
        "Peer-to-peer chat",
        "Self-hosted chat",
        "No server access",
        "Private group chat",
        "Secure file sharing",
        "Metadata minimization",
        "Message integrity",
        "Cryptographic security"
    ],
    
    competitors: [
        'signal',
        'whats_app',
        'threema',
        'wire',
        'element',
        'session',
        'imessage',
    ],
};
