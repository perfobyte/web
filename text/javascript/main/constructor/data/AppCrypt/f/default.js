


export default (
    (
        AppCrypt,

        Uint8Array,
        Uint32Array,
        ArrayFrom,
        DataView
    ) => {
        var
            byte_counter = 0,
            rounds = 20,
            block_size = 64,
            key_length = 32,
            nonce_length = 12,
            param_length = 16,
    
            length = 4
        ;
        return (
            new AppCrypt(
                byte_counter,
                rounds,
                block_size,
                key_length,
                nonce_length,
                param_length,
                length,

                Uint8Array,
                Uint32Array,
                ArrayFrom,
                DataView
            )
        )
    }
);
