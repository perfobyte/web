
import {scroll} from '../../state/i.js';

export default (
    (e) => {
        var
            html = scroll.target
        ;
        return (
            e.preventDefault(),

            (scroll.top = e.deltaY),
            html.scrollBy(scroll)
        )
    }
);
