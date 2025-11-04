import {chat} from '../../../state/i.js';
import {chatbar_h1,c_av,} from '../../../elems/i.js';


export default (
    (id,new_chat) => {
        return (
            (
                c_av
                .background = (
                    `rgb(${new_chat.r.join(",")})`
                )
            ),
            (chatbar_h1.textContent = new_chat.c),
            (chat.i = id),

            undefined
        )
    }
);
