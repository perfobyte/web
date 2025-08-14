import {V} from '../elems.js';

export default (
    () => (
        V.paused
        ? V.play()
        : V.pause()
    )
);
