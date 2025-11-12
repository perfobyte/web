import {today, } from '../../i.js';


export default (
    (ts,r, T,D) => {
        var ts_round = 0;
        return (
            today(r.t, ts)
            ? (
                ((ts_round = ts - (ts % 60_000)) === r.last_t)
                ? ""
                : (
                    (r.last_t = ts_round),
                    T
                )
            )
            : (
                ((ts_round = ts - (ts % 86_400_000)) === r.last_t)
                ? ""
                : (
                    (r.last_t = ts_round),
                    D
                )
            )
        )
    }
)