import f from './f/i.js';

function AppCrypt(
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
) {
    var
        value = new Uint8Array(length)
    ;

    this.byte_counter = byte_counter;
    this.rounds = rounds;
    this.block_size = block_size;
    this.key_length = key_length;
    this.nonce_length = nonce_length;
    this.param_length = param_length;
    this.length = length;

    this.key_stream = new Uint8Array(block_size);
    this.key = new Uint8Array(key_length);
    this.mix = new Uint32Array(param_length);
    this.nonce = new Uint8Array(nonce_length);

    this.param_buffer = new Uint32Array(param_length);
    this.param = new Uint32Array(param_length);

    this.value = value;
    this.value_copy = new Uint8Array(length);
    this.value_str = (
        ArrayFrom("\x00".repeat(length))
    );
    this.value_view = (
        new DataView(value.buffer)
    );
}

AppCrypt.prototype = f;

export default AppCrypt;
