import {audio_pline_viewed, audio_pl_use, pline} from '../../elems.js';


export default (
    () => {
        var
            r = pline.getBoundingClientRect()
        ;
        return (
            audio_pl_use.setAttribute("href", "#play_i"),

            (audio_pline_viewed.transform = (
                `scaleX(${
                    (
                        e.clientX
                        - r.left
                    )
                    / r.width
                })`
            ))
        );
    }
);
