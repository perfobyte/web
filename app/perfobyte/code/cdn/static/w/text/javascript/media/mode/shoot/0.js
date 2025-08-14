import {camera_cl, V} from '../../elems.js';

export default (
    (e) => {
        return(
            camera_cl.add("c"),
            e.stopPropagation(),
            V.pause()
        );
    }
);
