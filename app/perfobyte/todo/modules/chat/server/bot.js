import { Platform, Protocol, all_platforms } from '../../../enum/i.js';

export default {
    name: "Bot",

    description: (
        "Cloud-based chat designed for bots and automated workflows, "
        + "messages are routed through central servers via webhooks. "
        + "No end-to-end encryption; suitable for integration and automation."
    ),

    protocol: [
        Protocol.HTTPS,
    ],

    platform: all_platforms,

    type: [
        "Communication",
        "Messaging",
        "Bot integration",
        "Server-based",
        "Cloud chat"
    ],

    keywords: [
        "Cloud chat",
        "Bot messaging",
        "Webhook integration",
        "Server-based chat",
        "Automated messaging",
        "Real-time communication",
        "Cross-platform chat",
        "Message routing",
        "Cloud API",
        "Notification delivery"
    ],

    competitors: [
        "slack",
        "telegram",
        "discord"
    ],
}
