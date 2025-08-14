import c from '../c.js';
import {mdi,vdi,start_o} from '../../conf.js';
import {start,fix_e_2} from './i.js';


export default (
    (e) => (
        console.dir(e),
        (
            (e.constraint === "deviceId")
            &&
            (e.name === "OverconstrainedError")
        )
        ? (
            start(start_o)
            .catch(fix_e_2)
        )
        : console.error(e)
    )
);
