
export default ((_) => {
    // 0, // byte_counter
    _[1] = 20; // rounds
    _[2] = 64; // block_size
    _[3] = 32; // key_length
    _[4] = 12; // nonce_length
    _[5] = 16; // param_length
    _[6] = 4; // app_value_length

    return _;
})(
    new Uint8Array(8),
);
