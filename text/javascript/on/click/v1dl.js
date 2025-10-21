
import {VIEW_1_IMG} from "../../elems/i.js";


export default (
    (e) => {
        var
            D = globalThis.document,
            a = D.createElement("a")
        ;
        return (
            (a.href = VIEW_1_IMG.src),
            (a.download = "image.png"),
            D.body.appendChild(a),
            a.click(),
            a.remove()
        );
    }
)