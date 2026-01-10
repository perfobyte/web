import {main, selection_blocks} from '../../elems/i.js';
import {selection_groups, selections, range} from '../../conf/i.js';
import {state_alloc as A} from '../../state/i.js';

export default (
    (e) => {
        var
            cursor = main.cursor,
            c = cursor.element,
            selection = cursor.selection,
            p = 0
        ;
        
        if (selection) {
            p = A.length_selection_blocks;

            if (p) {
                range.setStartBefore(selection_blocks[0].element);
                range.setEndAfter(selection_blocks[p - 1].element);
                range.deleteContents();
            };
            
            A.length_selections =
            A.length_selection_blocks = 
            A.length_selection_groups =
                0;

            c.selection = null;
        };

        c.classList.add("hidden");
    }
);
