import {module_click} from '../on/click/i.js';
import {modules_ul,mdbr} from '../elems.js';


export default (
    (r,M) => {
        var
            a = mdbr.cloneNode(true),
            bt = a.querySelector("button")
        ;
        return (
            bt.addEventListener("click",module_click),

            (bt.querySelector("img").src = `/f/image/svg+xml/${M.id}.svg`),

            (
                bt
                .querySelector("span")
                .textContent = M.name
            ),
            (
                a
                .querySelector("div")
                .innerHTML = M.description
            ),

            modules_ul.appendChild(a),
            r
        );
    }
);
