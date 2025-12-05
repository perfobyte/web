
import {
    support_text_format,
    support_image_format,
    support_audio_format,
    support_video_format,
    support_font_format,
} from './format/i.js';
import support_font from './font/i.js';

export * from './format/i.js';
export * from './language/i.js';

export {default as support_interpretation} from './interpretation/i.js';
export {default as support_font} from "./font/i.js";

export var
    support_format = [
        support_text_format,
        support_image_format,
        support_audio_format,
        support_video_format,
        support_font_format,
    ],

    support = {
        4: support_font,
    }
;
