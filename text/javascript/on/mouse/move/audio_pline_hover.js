import {audio_pline_hover, pline} from '../../../elems/i.js';

export default (
    (e) => {
        var r = pline.getBoundingClientRect();
        return (
            audio_pline_hover.transform = `scaleX(${
                (
                    e.clientX
                    - r.left
                )
                / r.width
            })`
        );
    }
);
