import {ctxt_i} from '../../elems.js';

export default (
    (e) => {
        return (
            ctxt_i.innerText += e.currentTarget.textContent
        );
    }
);
