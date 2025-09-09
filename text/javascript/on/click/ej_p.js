import {ctxt_i} from '../../elems.js';
import {EMOJI} from '../../state/i.js';

export default (
    (e) => {
        var
            t = e.currentTarget,
            r = t.getBoundingClientRect(),
            i = (
                (
                    Math.floor(
                        (
                            (
                                e.clientY
                                - r.top
                            )
                            + t.scrollTop
                        )
                        / 40
                    )
                    * 7
                )
                + Math.floor(
                    (
                        e.clientX
                        - r.left
                    )
                    / 40
                )
            )
        ;
        return (
            ctxt_i.innerText += (
                ((i>=0)&&(i<EMOJI.length))
                ? EMOJI[i]
                :
                (document.activeElement.textContent)
                ||
                EMOJI[0]
            )
        )
    }
);
