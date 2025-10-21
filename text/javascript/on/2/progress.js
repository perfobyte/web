import {audio_pline_loaded} from '../../elems/i.js';

export default (
    (e) => {
        var
            t = e.currentTarget,
            b = t.buffered,
            l = b.length
        ;
        return (
            audio_pline_loaded
            .transform = (
                `scaleX(${
                    b.end(l - 1)
                    / t.duration
                })`
            )
        )
    }
);
