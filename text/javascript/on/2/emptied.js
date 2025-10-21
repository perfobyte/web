import {
    audio_pline_loaded,
    audio_pline_viewed,
    audio_pline_cursor,
    
    audio_ts_1,
    audio_ts_2,
} from '../../elems/i.js';

export default (
    (e) => {
        return (
            (
                audio_ts_1.textContent =
                audio_ts_2.textContent =
                    "00:00"
            ),
            (
                audio_pline_viewed.transform =
                audio_pline_loaded.transform =
                    "scaleX(0)"
            ),
            (
                audio_pline_cursor.transform = "translateX(0px)"
            )
        );
    }
);



