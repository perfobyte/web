import {cm_aud_cl} from '../../elems.js';
import {audio_render} from '../../logic/i.js';

export default (
    (e) => {
        return(
            cm_aud_cl.contains("a")
            ? cm_aud_cl.remove("a")
            : (
                navigator
                .mediaDevices
                .enumerateDevices()
                .then(
                    audio_render
                )
            )
        );
    }
);
