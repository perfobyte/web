import {scrolly} from '../../elems.js';
import {O} from '../../state/i.js';

export default (
    {
        top: 0,
        behavior: 'auto',

        target: globalThis.document.documentElement,
        starget: scrolly[O.I],
    }
);
