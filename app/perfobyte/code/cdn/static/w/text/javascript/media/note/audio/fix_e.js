import c from '../c.js';
import {mdi,start_a_o} from '../../conf.js';
import {start} from './i.js';
import {mc_mup} from './on/i.js';



export default (
    (e) => (
        (
            (e.constraint === "deviceId")
            &&
            (e.name === "OverconstrainedError")
        )
        ? (
            start(start_a_o)
            .catch((e) => (console.dir(e),mc_mup(e)))
        )
        : console.error(e)
    )
);
