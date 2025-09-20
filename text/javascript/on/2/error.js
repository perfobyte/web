import {audio_pl_use} from '../../elems.js';

export default (
    (e) => {
        return (
            console.error(e.currentTarget.error),
            audio_pl_use.setAttribute("href", "#warn_i")
        )
    }
);
