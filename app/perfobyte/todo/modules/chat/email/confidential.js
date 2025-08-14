import {all_platforms, Protocol, Point, EMAIL_PROTOCOL} from '../../../enum/i.js';

export default {
    name: "Confidential email",

    description: (
        "Confidential, secure, end-to-end encrypted email chat based on the OpenPGP protocol"
    ),

    protocol: EMAIL_PROTOCOL,

    platform: all_platforms,
    
    search: Point.CLIENT,

    type: [
        "Secure Email Chat",
        "Encrypted Email Messenger",
        "Privacy-focused Email Client",
        "End-to-End Encrypted Email Chat App",
        "Confidential Messaging for Email",
    ],

    keywords: [
        "End-to-end encryption",
        "OpenPGP email",
        "Secure email chat",
        "Encrypted messaging",
        "Privacy email client",
        "Confidential communication",
        "Secure mail messenger",
        "PGP encrypted email",
        "Private chat email",
        "Zero-knowledge email",
    ],

    competitors: [
        "proton_mail",
        "tutanota",
        "mailfence",
        "flow_crypt",
        "posteo",
        "cipher_mail",
    ],
};
