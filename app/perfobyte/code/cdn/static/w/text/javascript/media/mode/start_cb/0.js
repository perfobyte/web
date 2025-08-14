import {camera_cl} from '../../elems.js';

export default (
    (t) => {
        return(
            t.classList.add("a"),
            (t.style.left = "64px"),

            ((t=t.nextElementSibling).style.left = "128px"),
            t.classList.remove("a"),
            
            camera_cl.remove('d')
        )
    }
);
