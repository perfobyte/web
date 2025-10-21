import {scrolly} from '../../elems/i.js';
import {O} from '../../state/i.js';

export default (
    {
        top: 0,
        behavior: 'auto',

        target: globalThis.document.documentElement,
        starget: scrolly[O.I],
    }
);
