import {cm_aud_ul,AUDV,cm_aud_cl,} from '../elems.js';
import {cm_au_click} from '../on/i.js';
import {mdi} from '../conf.js';


export default (
    (dv) => {
        cm_aud_ul.innerHTML="";
        for (
            var
                d = mdi.exact,
                di = "",

                _ = null,
                a = null,
                b = null,
                i = 0,
                l = dv.length
            ;
            i < l;
            i++
        ){
            if ((_=dv[i]).kind === "audioinput") {
                
                (
                    b = (
                        (
                            a = (
                                AUDV
                                .cloneNode(true)
                            )
                        )
                        .querySelector("button")
                    )
                )
                .querySelector("span")
                .textContent = _.label;

                ((di = _.deviceId) === d)
                && b.classList.add('a');

                b.setAttribute("data-a", di);

                b.onclick = cm_au_click;
                
                cm_aud_ul.appendChild(a);
            }
            
        }
        cm_aud_cl.add("a");
    }
);
