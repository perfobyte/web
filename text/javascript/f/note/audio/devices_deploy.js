import {note} from '../../../state/i.js';

export default (
    (dv) => {
        var
            SE = note.SE
        ;

        SE.innerHTML="";

        for(
            var
                i = 0,
                l = dv.length,
                TYPE = note.TYPE,
                _ = null,
                e = null,
                L = note.L
            ;
            i<l;
            i++
        ){
            ((_=dv[i]).kind===TYPE) && (
                (e = document.createElement("option"))
                .setAttribute("value", _.deviceId),

                (L === (e.textContent = _.label))
                &&
                (e.selected = true),

                SE.appendChild(e)
            );
        }
        
    }
)
