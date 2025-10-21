import {CHA} from '../../elems/i.js';
import {
    after_chat_menu_0_click,
} from '../i.js';
import {
    after_chat_menu_0_scroll,
} from './i.js';


export default (
    (e) => {
        var w = e.currentTarget;
        return (
            w.removeEventListener("click",after_chat_menu_0_click),
            w.removeEventListener("contextmenu",after_chat_menu_0_click),
            w.removeEventListener("scroll", after_chat_menu_0_scroll),

            CHA.querySelector('.chbr > button.ctx').classList.remove("ctx"),
            w.document.getElementById("chat_menu_0").classList.remove('a')
        )
    }
);
