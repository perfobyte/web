import {all_platforms, Protocol, Point, EMAIL_PROTOCOL} from '../../../enum/i.js';

export default {
    name: "Protected email",

    description: (
        "Protected centralized server-side email chat "
        + "based on Secure/Multipurpose Internet Mail Extensions (S/MIME) protocol"
    ),

    protocol: EMAIL_PROTOCOL,

    platform: all_platforms,

    search: Point.CLIENT,

    type: [
        "Email Client",
        "Secure Email",
        "Business Communication",
        "Productivity",
        "Communication",
        "Enterprise Messaging",
    ],

    keywords: [
        "Secure Email",
        "Encrypted Email",
        'S/MIME',
        'Email Client',
        'Enterprise Email',
        'Business Communication',
        'Email Chat',
        'Digital Signature',
        'Server-side Encryption',
        'Compliance',
    ],

    competitors: [
        'microsoft_outlook',
        "hcl_notes",
        'zimbra',
        "proton_mail",
        'hcl_verse',
        'mailbird',
    ],
};
