import { NATIVE_PLATFORMS, Platform, Protocol } from '../../../enum/i.js';

export default {
    name: "SSH",

    description: (
        "Peer-to-server or server-mediated chat over SSH, "
        + "allowing secure command-line or scripted messaging. "
        + "Data is encrypted via SSH; suitable for remote administration and automation."
    ),

    protocol: [
        Protocol.SSH,
    ],

    platform: NATIVE_PLATFORMS,

    type: [
        "Communication",
        "Messaging",
        "Remote administration",
        "Server-based",
        "Secure shell"
    ],

    keywords: [
        "SSH chat",
        "Remote messaging",
        "Command-line chat",
        "Server communication",
        "Secure messaging",
        "Encrypted channel",
        "Admin tools",
        "Automation",
        "Remote shell",
        "Terminal chat"
    ],

    competitors: [
        "tmux_chat",
        "wee_chat",
        "Custom SSH bots"
    ],
}
