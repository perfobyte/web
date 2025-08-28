import {today, MINUTE, DAY} from '../../i.js';


export default (
    (ts,r, T,D) => {
        var ts_round = 0;
        return (
            today(r.t, ts)
            ? (
                ((ts_round = ts - (ts % MINUTE)) === r.last_t)
                ? ""
                : (
                    (r.last_t = ts_round),
                    T
                )
            )
            : (
                ((ts_round = ts - (ts % DAY)) === r.last_t)
                ? ""
                : (
                    (r.last_t = ts_round),
                    D
                )
            )
        )
    }
)