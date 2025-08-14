
import {mcin_t} from '../../elems.js';
import {time} from '../../f/i.js';
import c from '../c.js';


export default (
    ()=>(
        mcin_t.textContent = time(++c.v)
    )
);
