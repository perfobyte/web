import {chat as CHAT} from '../../../state/i.js';
import {chatbar_h1,c_av,} from '../../../elems/i.js';


export default (
    (id,chat) => {
        return (
            (
                document.getElementById('nav_chat_av').style.color =
                c_av.background =
                    `rgb(${chat.r.join(",")})`
            ),
            (chatbar_h1.textContent = chat.c),

            (CHAT.i = id),

            undefined
        )
    }
)