import {chat} from '../state/i.js';
import {chatbar_h1,c_av,} from '../elems.js';


export default (
    (id,chat) => {
        return (
            // TODO: load messages for each chat
            
            (c_av.background = `rgb(${chat.r.join(",")})`),

            (chatbar_h1.textContent = chat.c),

            (chat.i = id),

            undefined
        )
    }
)