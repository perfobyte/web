import {msg_view} from '../msg.js';

export default new Uint8Array(msg_view.getUint16(0,true));
