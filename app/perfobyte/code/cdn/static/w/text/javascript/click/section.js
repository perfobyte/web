import O from '../state/O.js';
import T from '../data/title.js';

import {ct,el_cache,html} from '../elems.js';


export default (
    (e) => {
        var
            t = e.currentTarget,

            _ = parseInt(t.getAttribute("data-a")),
            I = O.I
        ;
        return (
            (_ === I)
            ||
            (
                el_cache.bi.remove("a"),

                document.querySelector("#c > .a")?.classList.remove("a"),

                document.getElementById(`c${I}`).classList.add('a'),
                
                (el_cache.bi = t.classList)
                .add("a"),
                
                window.history.pushState(I, T[I], `/?${O.I = _}`),

                (document.title = T[_]),

                (html.scrollLeft = (_ * window.innerWidth))
            )
        );
    }
)