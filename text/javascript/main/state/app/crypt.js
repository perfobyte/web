import {get_app_crypt} from './f/i.js';

export default (
    get_app_crypt(
        globalThis.Uint8Array,
        globalThis.Uint32Array,
        globalThis.DataView,
        globalThis.Array.from
    )
);
