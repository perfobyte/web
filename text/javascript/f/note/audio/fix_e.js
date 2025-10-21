import {mdi,start_a_o} from '../../../conf/i.js';
import start from './start.js';
import {mc_mup} from '../../../on/i.js';

export default (
    (er) => (e) => (
        (
            (e.constraint === "deviceId")
            &&
            (e.name === "OverconstrainedError")
        )
        ? (
            start(start_a_o)
            .catch(er)
        )
        : console.error(e)
    )
)(
    (error) => (
        console.dir(error),
        mc_mup()
    )
);
