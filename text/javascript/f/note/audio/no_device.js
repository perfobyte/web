
import {note} from '../../../state/i.js';


export default (
    (e) => {
        var
            SE = note.SE,
            o = document.createElement("option")
        ;
        return(
            (o.textContent = "No devices found"),
            SE.replaceChildren(o)
        )
    }
)