import {cl_dlist_ul} from '../elems.js';
import {on_device_change} from '../call/i.js';
import {cl_dlist_li_create} from '../create/i.js';



export default (
    (ul,v) => {
        var
            li = null,
            di = "",
            kind = ul.getAttribute("data-t")
        ;
        return (
            (v.kind === kind)
            &&
            (
                (li = cl_dlist_ul.appendChild(cl_dlist_li_create(v.label, (di=v.deviceId), on_device_change))),

                (di===ul.getAttribute("data-d"))
                &&
                (li.firstElementChild.className = "s")
            ),
            ul
        );
    }
);
