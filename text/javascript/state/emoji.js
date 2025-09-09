import EMOJI from './EMOJI.js';

export var
    emoji = new Uint8Array(8),
    emoji_view = new DataView(emoji.buffer)
;

emoji[2] = ((emoji[0] = 7) * (emoji[1] = 8)); // amount = (w * h)
emoji[3] = 40; // size

emoji_view.setUint16(4, 0, true); // [free=2]
// [6] = (offset=2) (loaded)
