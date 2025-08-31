import {O,scroll,scroll_value} from '../../state/i.js';
import {title} from '../../api/i.js';
import {ct,el_cache,html,scrolly,scrollo,} from '../../elems.js';


export default (
    (e) => {
        var
            t = e.currentTarget,

            _ = parseInt(t.getAttribute("data-a")),
            I = O.I
        ;
        return (
            el_cache.bi.remove("a"),

            document.querySelector("#c > .a")?.classList.remove("a"),

            document.getElementById(`c${_}`).classList.add('a'),
            
            (el_cache.bi = t.classList)
            .add("a"),
            
            window.history.pushState(I, title[I], `/?${O.I = _}`),

            (document.title = title[_]),

            (
                html.style.height =
                    `${scrollo[_].clientHeight}px`
            ),

            (
                html.scrollTop = scroll_value[_]
            ),

            (ct.scrollLeft = (_ * window.innerWidth))
        );
    }
)