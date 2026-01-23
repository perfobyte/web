import {selection_groups, selections, range, selection_blocks, cursors} from '../../conf/i.js';
import {state_alloc as A} from '../../state/i.js';

export default (
    (e) => {
        var
            sblock = null,
            e = null,
            cl = null,
            i = 0,
            l = A.length_selection_blocks
        ;
        for(;i<l;i++) {
            sblock = selection_blocks[i];
            e = sblock.element;
            cl = e.classList;
            
            sblock.stylize_active(cl);
        }

        cursors[0].element.classList.remove("hidden");
    }
);
