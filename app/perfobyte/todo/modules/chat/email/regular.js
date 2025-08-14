import {all_platforms, Protocol, Point, EMAIL_PROTOCOL} from '../../../enum/i.js';

export default {
    name: "Email",

    description: (
        "SMTP-based email chat without encryption, with spam and attack protection"
    ),

    protocol: EMAIL_PROTOCOL,

    platform: all_platforms,
    
    search: Point.ME,

    type: [
        "Email Client",
        "Email Chat",
        "Messaging",
        "Communication",
        "Business Communication",
        "Productivity",
    ],

    keywords: [
        "Email",
        "SMTP",
        "Spam Protection",
        "Secure Email",
        "Anti-Phishing",
        "Lightweight Chat",
        "Business Messaging",
    ],

    competitors: [
        "google_gmail",
        "microsoft_outlook",
        "yahoo_mail",
        "proton_mail",
        "mailbird",
        "thunderbird",
        "spam_assassin",
        "barracuda",
    ],
};
