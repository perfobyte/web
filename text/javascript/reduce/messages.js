import {msg_to_html, msg_time_to_html, count_char, date, time, msg_time_format, detail_time} from '../f/i.js';
import {msg_rows_reduce} from './i.js';

export default (
    (r,a,id) => {
        var
            ts = a.t,

            ts_round = 0,

            s = a.v,
            rows = count_char(s,"\n",1, 0,s.length),

            ts_o = new Date(ts),

            T = time(ts_o),
            D = date(ts_o)
        ;
        return (
            msg_to_html(
                s,
                id,
                rows,
                r.ul,
                r.msg_el,
                r.MSG_EL.cloneNode(true),
                r.msg_v_el,
            ),

            r.time_ul.appendChild(
                msg_time_to_html(
                    msg_time_format(ts,r,T,D),
                    rows,
                    `${D} ${detail_time(T, ts_o)}`,
                    r.MT_EL.cloneNode(true),
                    r.mt_v_el,
                )
            ),

            r
        );
    }
);
