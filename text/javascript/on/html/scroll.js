
import {scroll,scroll_value,O} from '../../state/i.js';
import {scrolly,} from '../../elems/i.js';


export default (
    (e) => {
        var
            el = scroll.starget,
            window = e.currentTarget,
            html = window.document.documentElement,
            
            scale = (
                (el.scrollHeight - el.clientHeight)
                / (html.scrollHeight - window.innerHeight)
            )
        ;
        return (
            (scroll.top = (
                scroll_value[O.I] = (
                    scale
                    * html.scrollTop
                )
            )),

            el.scrollTo(scroll)
        )
    }
);
