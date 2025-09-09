import {EMOJI} from '../../../state/i.js';

export default (
    (e) => (
        e
        .currentTarget
        .textContent = (
            EMOJI[
                Math.floor(
                    Math.random()
                    * EMOJI.length
                )
            ]
        )
    )
);
