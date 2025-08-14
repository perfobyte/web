
import {msgs} from '../elems.js';
import {get_chat,get_chats_length} from '../get/i.js';
import {open_chat} from "../open/i.js";



export default (
    (e) => {
        var
            id = Math.floor(
                (
                    e.clientY - e.currentTarget.getBoundingClientRect().top
                )
                / 50
            ),

            chat = get_chat(id)
        ;
        return (
            (id < get_chats_length())
            &&
            (
                open_chat(id, chat),
                (msgs.scrollTop = msgs.scrollHeight) // TODO: cache for each chat, else msgs.scrollHeight
            )
        )
    }
)