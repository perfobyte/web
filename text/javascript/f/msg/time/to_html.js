import {msg_height} from "../../i.js";

export default (
    (c, rows, datetime, el, mt_v_el) => {
        return (
            (el.style.height = msg_height(rows)+"px"),
            el.setAttribute("title", datetime),

            c && (
                (rows > 1) && el.classList.add("m"),
                (mt_v_el(el).textContent = c)
            ),
            el
        );
    }
)