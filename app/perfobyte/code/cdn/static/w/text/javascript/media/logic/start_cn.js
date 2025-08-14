import {camera_cl,V} from "../elems.js";


export default (
    (s) => {
        return(
            camera_cl.add("a"),
            (V.srcObject = s)
        );
    }
);
