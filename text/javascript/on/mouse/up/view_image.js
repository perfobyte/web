import {
    on_view_image_mousemove,
    on_view_image_mouseup,
} from '../i.js';

export default (
    function(e) {
        return (
            this.removeEventListener("mousemove", on_view_image_mousemove),
            this.removeEventListener("mouseup", on_view_image_mouseup)
        );
    }
);