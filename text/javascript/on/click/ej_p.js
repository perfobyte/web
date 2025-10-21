import {ctxt_i} from '../../elems/i.js';
import {EMOJI, emoji} from '../../state/i.js';

export default (
    (e) => {
        var
            t = e.currentTarget,
            r = t.getBoundingClientRect(),
            size = emoji[3],
            i = (
                (
                    Math.floor(
                        (
                            (
                                e.clientY
                                - r.top
                            )
                            // + t.scrollTop
                        )
                        / size
                    )
                    * emoji[0]
                )
                + Math.floor(
                    (
                        e.clientX
                        - r.left
                    )
                    / size
                )
            ),
            l = EMOJI.length
        ;
        return (
            ctxt_i.innerText += (
                ((i>=0)&&(i<l))
                ? EMOJI[i]
                : (
                    (document.activeElement.textContent)
                    ||
                    EMOJI[l-1]
                )
            )
        )
    }
);
