import {audio_pline_hover, pline} from '../../../elems.js';

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
