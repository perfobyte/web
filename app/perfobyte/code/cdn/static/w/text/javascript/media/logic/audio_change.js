import {V} from '../elems.js';
import {stop,accept_track,} from "../f/i.js";
import C from '../cache.js';


export default (
    (ns) => {
        var s = V.srcObject;
        return (
            s
            .getAudioTracks()
            .reduce(stop,s),

            ns
            .getAudioTracks()
            .reduce(accept_track,s),
            
            ns
            .getVideoTracks()
            .reduce(stop,ns),

            document
            .querySelector("#cm_aud .audv > button.a")
            .classList
            .remove("a"),

            C.T.add("a")
        );
    }
);
