import {O,scroll,scroll_value, scrollo_height, } from '../../state/i.js';
import {title} from '../../conf/i.js';
import {ct,el_cache, html,html_st,scrolly} from '../../elems/i.js';

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
            
            (el_cache.bi = t.classList).add("a"),
            window.history.pushState(I, title[I], `/?${O.I = _}`),

            (document.title = title[_]),
            
            (html_st.height = `${scrollo_height[_]}px`),
            (html.scrollTop = scroll_value[_]),
            (scroll.starget = scrolly[_]),

            (ct.scrollLeft = (_ * window.innerWidth))
        );
    }
)