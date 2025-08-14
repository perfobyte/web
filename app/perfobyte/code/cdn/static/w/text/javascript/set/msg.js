
import {msgs_ul, msgs_time_ul} from '../elems.js';
import {chat} from "../state/i.js";

import {messages_reduce} from '../reduce/i.js';



export default (
    (m) => {
        return (
            (
                msgs_ul.innerHTML += (
                    messages_reduce(
                        chat,
                        m,
                        (++chat.loaded) // TODO:
                    )
                    .v
                )
            ),  
            (
                msgs_time_ul.innerHTML += (
                    chat.tv
                )
            ),
            undefined
        );
    }
)