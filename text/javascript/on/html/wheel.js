
import {scroll} from '../../state/i.js';

export default (
    (e) => {
        var
            html = e.currentTarget.documentElement
        ;
        return (
            e.preventDefault(),

            (scroll.top = e.deltaY),
            html.scrollBy(scroll)
        )
    }
);
