import { Platform, Protocol, all_platforms, NONE, Point, all_camera_modes } from '../../enum/i.js';

export default {
    name: "Basic",

    description: (
        "Basic camera application providing access to your device's camera and microphone, "
        + "allowing photo capture, video recording, and audio input."
    ),

    mode:all_camera_modes,
    platform: all_platforms,

    type: [
        "Photography",
        "Video recording",
        "Audio capture",
        "Media",
        "Utilities",
        "Camera app",
        "Basic camera functionality"
    ],

    keywords: [
        "Camera",
        "Photo",
        "Video",
        "Audio",
        "Microphone",
        "Capture",
        "Media recording",
        "Camera app",
        "Basic media app",
        "Selfie",
        "Video capture",
        "Photo editor",
        "Local media"
    ],

    competitors: [
        "Google Camera",
        "Open Camera",
        "Camera FV-5",
        "ProCamera",
        "VSCO",
        "Adobe Lightroom",
        "Snapseed"
    ],
};
