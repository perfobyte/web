import {O, scrollo_height, } from '../../state/i.js';
import {html, html_st} from '../../elems/i.js';


export default (entries,obs) => {
    var
        i = 0,
        l = entries.length,
        e = null,
        target = null,
        h = 0,
        I = 0,
        current_i = O.I
    ;
    for (;i<l;i++) {
        h = (e = entries[i]).contentRect.height;

        (
            current_i === (
                I = Number(
                    (target = e.target)
                    .getAttribute("data-a")
                )
            )
        )
        ? (
            (html_st.height = `${scrollo_height[I] = h}px`),

            (I === 1) && (
                (html.scrollTop = html.scrollHeight)
            )
        )
        : (scrollo_height[I] = h);
    };
    
    return undefined;
}