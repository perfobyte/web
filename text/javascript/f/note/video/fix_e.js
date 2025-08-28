
import start from './start.js';
import fix_e_2 from './fix_e_2.js';

import {mdi,vdi,start_o} from '../../../conf.js';

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
