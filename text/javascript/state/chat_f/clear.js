import {msgs_ul, c_av, msgs_time_ul, chatbar_h1, ctxt_i} from '../../elems/i.js';


export default (
    function(name) {
        this.msgs.clear();

        this.i = -2;

        this.sl = -1;
        
        ctxt_i.innerText =
        msgs_time_ul.innerHTML = 
        msgs_ul.innerHTML =
        this.v = 
        this.tv =
         "";

        document.getElementById("nav_chat_av").style.color =
        c_av.background = "var(--background-color)";

        chatbar_h1.textContent = name;


        this.loaded =
        this.last_t = 0;
    }
)