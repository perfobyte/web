import {module_click} from '../../on/i.js';
import {modules_ul,mdbr,SIMPLE_ICON, MODULE_TAG} from '../../elems/i.js';
import {bit_get} from '../i.js';

import {module_type_icon, module_type_name,} from "../../state/i.js";
import {MODULE_APIS} from "../../conf/i.js";


export default (
    (r,M) => {
        var
            a = mdbr.cloneNode(true),
            bt = a.querySelector("button"),
            t = M.t,
            i_el = bt.querySelector(".i"),
            i = 0,
            new_svg = null,

            tags = a.querySelector(".tags"),
            module_tag = null,

            icon = "",

            desc_t = a.querySelector(".c .t"),

            bt_t = bt.querySelector(".title")
        ;
        
        for (;i<MODULE_APIS;i++) {
            (bit_get(t,i)===1)
            &&
            (
                (module_tag=MODULE_TAG.cloneNode(true))
                .querySelector("use")
                .setAttribute("href", (icon=module_type_icon[i])),

                (module_tag
                .querySelector(".t")
                .textContent = module_type_name[i]),

                (new_svg=SIMPLE_ICON.cloneNode(true))
                .querySelector("use")
                .setAttribute("href",icon),
                
                tags.appendChild(module_tag),
                i_el.appendChild(new_svg)
            );
        };

        return (
            (bt.onclick = module_click),

            bt.querySelector(".a use").setAttribute("href", M.a),
            
            (bt_t.textContent = M.n),
            (desc_t.innerHTML = M.d),

            modules_ul.appendChild(a),
            r
        );
    }
);
