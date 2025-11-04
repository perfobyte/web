import {msgs_list, c_av, msgs_time_ul, chatbar_h1, ctxt_i} from '../elems/i.js';

export default (
    (t, name) => {
        t.msgs.clear();

        t.i = -2;
        
        ctxt_i.innerText =
        msgs_time_ul.innerHTML = 
        msgs_list.innerHTML =
        t.v = 
        t.tv =
         "";

        document.getElementById("nav_chat_av").style.color =
        c_av.background = "var(--background-color)";

        chatbar_h1.textContent = name;


        t.loaded =
        t.last_t = 0;
    }
)