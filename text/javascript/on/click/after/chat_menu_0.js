import {CHA} from '../../../elems/i.js';
import {after_chat_menu_0_scroll} from '../../i.js';


export default (
    () => {
        var
            a = (
                (e) => {
                    var
                        t = e.currentTarget,
                        cl = chat_menu.classList
                    ;
                    return (
                        e.target.closest("#chat_menu_0")
                        ||
                        (
                            after_chat_menu_0_scroll(e)
                        )
                    );
                }
            )
        ;
        return a;
    }
)();
