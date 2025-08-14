import {V,camera_cl} from '../elems.js';
import {stop} from '../f/i.js';


export default (
    () => {
        var s = V.srcObject;
        return (
            (V.srcObject = null),

            s
            .getTracks()
            .reduce(stop, s),

            camera_cl.remove("a")
        );
    }
);
