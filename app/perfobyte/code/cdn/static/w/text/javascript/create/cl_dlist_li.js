import {cl_dv} from '../elems.js';

export default (
    (n, v, onclick) => {
        var
            li = cl_dv.cloneNode(true),
            b = li.firstElementChild
        ;
        return (
            b.setAttribute("data-i", v),
            (b.firstElementChild.textContent = n),
            (b.onclick = onclick),

            li
        )
    }
)


