import {V} from '../elems.js';

import {accept_track,stop} from '../f/i.js';


export default (
    (ns) => {
        var s = V.srcObject;
        return (
            s
            .getVideoTracks()
            .reduce(stop,s),

            ns
            .getVideoTracks()
            .reduce(accept_track,s),

            ns
            .getAudioTracks()
            .reduce(stop,ns)
        );
    }
);
