import {on_scrollbar_thumb_mousemove} from '../move/i.js';
import {on_scrollbar_thumb_mouseup} from '../up/i.js';

export default (
    (e) => {
        var
            t = e.currentTarget,
            w = e.view,

            i = t.getAttribute("data-coord-type")
        ;
        return void (
            e.preventDefault(),
            e.stopPropagation(),
            
            t.querySelector(".scrollbar-thumb").classList.add("active"),

            w.addEventListener("mouseup", on_scrollbar_thumb_mouseup[i]),
            w.addEventListener("mousemove", on_scrollbar_thumb_mousemove[i])
        );
    }
);
