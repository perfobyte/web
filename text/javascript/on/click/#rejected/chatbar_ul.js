
import {msgs, html} from '../../../elems/i.js';
import {open_chat, get_chat, get_chats_length} from "../../../f/i.js";

export default (
    (e) => {
        var
            chap = e.currentTarget,
            cha = chap.querySelector("#cha"),

            id = Math.floor(
                (
                    e.clientY - cha.getBoundingClientRect().top
                )
                / 50
            ),

            chat = get_chat(id)
        ;
        return (
            open_chat(id, chat),
            document.querySelector('#nv button[data-a="1"]').click(),
            (html.scrollTop = html.scrollHeight)
        )
    }
)