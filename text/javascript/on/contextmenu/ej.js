import {ctxt_i} from '../../elems/i.js';

export default (
    (e) => {
        return (
            ctxt_i.innerText += e.currentTarget.textContent
        );
    }
);
