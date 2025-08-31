
import {scroll,O,scroll_value} from '../../state/i.js';
import {scrolly,} from '../../elems.js';


export default (
    (e) => {
        var
            i = O.I,
            el = scrolly[i],
            window = e.currentTarget,
            html = window.document.documentElement,
            
            scale = (
                (el.scrollHeight - el.clientHeight)
                / (html.scrollHeight - window.innerHeight)
            )
        ;
        return (
            (scroll.top = (
                scroll_value[i]=scale*document.documentElement.scrollTop
            )),

            el.scrollTo(scroll)
        )
    }
);
