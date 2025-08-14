import {chat_menu} from '../../elems.js';

export default (
    () => {
        var a = (
            (e) => {
                var t = e.currentTarget,
                    cl = chat_menu.classList;
                return e.target.closest("#chat_menu") || (

                    t.removeEventListener("click",a),
                    t.removeEventListener("contextmenu",a),

                    e.stopPropagation(),
                    
                    cl.remove("a"),
                    cl.remove("b")
                )
            }
        );
        return a;
    }
)();
