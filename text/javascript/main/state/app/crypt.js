import {get_app_crypt_data} from './f/i.js';

export default (
    get_app_crypt_data(
        globalThis.Uint8Array,
        globalThis.Uint32Array,
        globalThis.DataView,
        globalThis.Array.from
    )
);
