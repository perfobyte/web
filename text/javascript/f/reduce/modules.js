import {module_click} from '../../on/i.js';
import {modules_ul,mdbr} from '../../elems/i.js';


export default (
    (r,M) => {
        var
            a = mdbr.cloneNode(true),
            bt = a.querySelector("button")
        ;
        return (
            (bt.onclick = module_click),

            bt.querySelector("use").setAttribute("href", M.a),

            (bt.querySelector("span").textContent = M.n),
            (a.querySelector("div").innerHTML = M.d),

            modules_ul.appendChild(a),
            r
        );
    }
);
