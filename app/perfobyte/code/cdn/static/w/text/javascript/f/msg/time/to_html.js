import {msg_height} from "../../i.js";

export default (
    (c, rows, date, time) => {
        return (
            `<div style="height:${
                msg_height(rows)
            }px"title="${
                date
            } ${
                time
            }" ${
                c && (rows > 1)
                ? 'class="m"'
                : ""
            }>${
                c
                ? `<span>${c}<span>`
                : ""
            }</div>`
        );
    }
)