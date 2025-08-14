import C from '../../cache.js';
import {o,mdi} from '../../conf.js';
import {audio_change,} from '../../logic/i.js';
import O from '../../../state/O.js';


export default (
    function() {
        return (
            (C.T = this.classList),
            localStorage.setItem("4", (O.md = mdi.exact = this.getAttribute("data-a"))),

            navigator
            .mediaDevices
            .getUserMedia(o)
            .then(audio_change)
            .catch(console.error)
        );
    }
);
