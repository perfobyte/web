
var
    max_chat_name_length = 256,
    max_chat_size = (
        (4*(10**9)) * (1.8446*(10**19))
    ) // 73,784 YB
;

export default {
    count: 8,
    chat_id: 8,
    receiver_id: 8,
    initiator_id: 8,

    initiator_name_length: 1,
    initiator_name_offset: 8,
    initiator_rgb: 3,
    
    receiver_name_length: 1,
    receiver_name_offset: 8,
    receiver_rgb: 3,
    
    initiator_session_id(8),
    receiver_session_id(8),

    size(8),
    response_time(4),
    average_message_length(4),

    
} = (
    128
);

+ chat_name HEAP;

chatbar = [
    amount of messages,
    loaded messages,
];
