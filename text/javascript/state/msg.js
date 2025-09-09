

export var
    msg = new Uint8Array(2),
    msg_view = new DataView(msg.buffer)
;

msg_view.setUint16(0,4096,true);// (0,2) = msg_buffer_length
