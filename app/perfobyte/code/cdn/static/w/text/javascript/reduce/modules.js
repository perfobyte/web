import {module_click} from '../click/i.js';
import {modules_ul,mdbr} from '../elems.js';


export default (
    (r,M) => {
        var
            a = mdbr.cloneNode(true),
            bt = a.querySelector("button")
        ;
        return (
            bt.addEventListener("click",module_click),

            (bt.querySelector("img").src = r.t + M.s),

            (
                bt
                .querySelector("span")
                .textContent = M.n
            ),
            (
                a
                .querySelector("div")
                .innerHTML = M.d
            ),

            modules_ul.appendChild(a),
            r
        );
    }
);
