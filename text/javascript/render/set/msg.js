
import {chat} from "../../state/i.js";
import {count_char} from '../../f/i.js';
import {msg_to_html, msg_time_to_html, msg_time_format, detail_time, time, date} from '../../f/i.js';


export default (
    (v,id,t) => {
        var
            rows = count_char(v,"\n",1, 0, v.length),

            ts_o = new Date(t),

            T = time(ts_o),
            D = date(ts_o)
        ;
        return (
            msg_to_html(
                v,
                id,                
                rows,
                chat.ul,
                chat.msg_el,
                chat.MSG_EL.cloneNode(true),
                chat.msg_v_el,
            ),

            chat.time_ul.appendChild(
                msg_time_to_html(
                    msg_time_format(t,chat,T,D),
                    rows,
                    `${D} ${detail_time(T, ts_o)}`,
                    chat.MT_EL.cloneNode(true),
                    chat.mt_v_el,
                )
            ),

            id
        );
    }
)