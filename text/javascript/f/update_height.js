import {scroll,scroll_value} from '../state/i.js';
import {html,scrolly,scrollo,} from '../elems.js';

export default (
    (_) => {
        return (
            (scroll.starget = scrolly[_]),
            (html.style.height = `${scrollo[_].clientHeight}px`),
            (html.scrollTop = scroll_value[_]),
            _
        )
    }
);
