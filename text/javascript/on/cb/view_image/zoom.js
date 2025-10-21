import {VIEW_1_IMG, view1_zoom_p_st} from '../../../elems/i.js';
import {view} from '../../../state/i.js';


export default (
    (percent) => {
        var
            r = VIEW_1_IMG.getBoundingClientRect(),
            s = VIEW_1_IMG.style,
            clamped = Math.max(1, Math.min(2, 1 + (percent / 100))),
            delta = clamped / view[4],
            delta1 = 1 - delta
        ;
        return (
            (view[4] = clamped),
            
            (s.left = `${view[0] += (r.width / 2) * delta1}px`),
            (s.top = `${view[1] += (r.height / 2) * delta1}px`),
            (s.width = `${view[2] *= delta}px`),
            (s.height = `${view[3] *= delta}px`)
        );
    }
);
