
import {on_loader_submit, on_observer_resize} from './on/i.js';
import {loader_form, scrollo} from "./elems/i.js";
import {preventDefault} from './f/i.js';
import {scrollo_height, O} from './state/i.js';


(
    (w,d,c,loader_form, section_ro) => {
        var
            i = 0,
            l = scrollo.length,
            e = null
        ;
        for (;i<l;i++) {
            scrollo_height[i] = (
                (e = scrollo[i])
                .scrollHeight
            );
            section_ro.observe(e);
        }
        return (
            (w.onerror = c.error),

            loader_form.addEventListener("submit",on_loader_submit),
            w.addEventListener("contextmenu",preventDefault),

            d.body.classList.add("a"),
            loader_form.removeAttribute("disabled"),
            d.getElementById("password").focus()
        )
    }
)(
    globalThis.window,
    globalThis.document,
    globalThis.console,
    loader_form,
    new globalThis.ResizeObserver(on_observer_resize),
);
