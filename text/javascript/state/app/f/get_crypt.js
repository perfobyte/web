export default (
    (Uint8Array, Uint32Array, DataView, arrayFrom) => {
        var
            byte_counter = 0,
            rounds = 20,
            block_size = 64,
            key_length = 32,
            nonce_length = 12,
            param_length = 16,
    
            length = 4,
    
            value = new Uint8Array(length)
        ;
    
        return {
            byte_counter,
            rounds,
            block_size,
            key_length,
            nonce_length,
            param_length,
            length,
    
            key_stream: new Uint8Array(block_size),
            key: new Uint8Array(key_length),
            mix: new Uint32Array(param_length),
            nonce: new Uint8Array(nonce_length),
    
            param_buffer: new Uint32Array(param_length),
            param: new Uint32Array(param_length),
    
            value,
            value_copy: new Uint8Array(length),
            value_str: (
                arrayFrom("\x00".repeat(length))
            ),
            value_view: (
                new DataView(value.buffer)
            ),
        };
    }
);
