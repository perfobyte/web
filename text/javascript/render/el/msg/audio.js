import {lang} from "../../../state/i.js";

export default (
    (el,vl,size,dr,id,click) => {
        return (
            el.setAttribute("data-a", id.toString()),

            (el.querySelector(".size").textContent = size),
            (el.querySelector(".dr").textContent = dr),

            (el.querySelector(".vl").textContent = lang._[0][vl]),
            (el.querySelector(".vl_i").className = `_${vl}`),

            (el.onclick = click),
            el
        );
    }
);
