import {view} from '../../../../state/i.js';
import {VIEW_1_PN} from '../../../../elems/i.js';
import {on_view_image_pn_cb} from '../../../i.js';


export default (
    () => {
        return (
            globalThis.clearTimeout(view[7]),
            VIEW_1_PN.add("a"),
            (view[7] = globalThis.setTimeout(on_view_image_pn_cb,4_000))
        );
    }
);
