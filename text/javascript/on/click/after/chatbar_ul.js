import {chat_menu} from '../../../elems/i.js';

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
                        e.target.closest("#msg_menu")
                        ||
                        (
                            t.removeEventListener("click",a),
                            t.removeEventListener("contextmenu",a),

                            cl.remove("a"),
                            cl.remove("b")
                        )
                    );
                }
            )
        ;
        return a;
    }
)();
