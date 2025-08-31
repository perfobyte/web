import {O} from '../../state/i.js';
import {ct} from '../../elems.js';


export default (
    (e) => {
        var
            window = e.currentTarget,

            html = document.documentElement,
            html_st = html.style,
            w = 0
        ;
        return (
            html_st.setProperty("--w", (w=window.innerWidth) + "px"),
            html_st.setProperty("--h", window.innerHeight + "px"),
            (ct.scrollLeft = (w * O.I))
        );
    }
);
