
[
    status (1) [
        free,
        deleted,
        sent,
        accepted,
        viewed,
        updated,
    ],

    type (1) [
        text,
        image,
        audio,
        video,
        file,
    ],

    format (1),

    utm_source (1) [
        push_notification,
        ui_chat,
        code,
    ],

    value_length (4),
    value_offset (8),

    sent_at (4),
    sender_session_id (8),
    sender_user_id (8),

    chat_id (8),
    chat_message_id (8),

    // TODO: 12 bytes
] = (
    64
);
