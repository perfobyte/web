import C from '../c.js';

export default (
    (dv) => {
        var SE = C.SE;

        SE.innerHTML="";

        for(
            var
                i = 0,
                l = dv.length,
                TYPE = C.TYPE,
                _ = null,
                e = null,
                L = C.L
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
