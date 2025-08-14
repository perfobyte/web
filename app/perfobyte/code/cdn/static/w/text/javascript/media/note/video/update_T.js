


import {ntin_ts} from '../../elems.js';
import {time} from '../../f/i.js';
import c from '../c.js';


export default (
    ()=>(
        ntin_ts.textContent = time(++c.v)
    )
);
