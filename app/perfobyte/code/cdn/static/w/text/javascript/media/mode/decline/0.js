import {V,camera_cl} from '../../elems.js';

export default (
    (e) => {
        return (
            V.play(),
            camera_cl.remove("c")
        );
    }
);
