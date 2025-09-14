import {on_view_image_mousemove, on_view_image_mouseup} from '../i.js';
import {view} from '../../../state/i.js';

export default (
    (e) => {
        return (
            e.preventDefault(),
            (view[5] = (e.clientX - view[0])),
            (view[6] = (e.clientY - view[1])),

            window.addEventListener("mousemove", on_view_image_mousemove),
            window.addEventListener("mouseup", on_view_image_mouseup)
        )
    }
);
