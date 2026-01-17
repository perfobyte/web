import {selection_groups, selections, range, selection_blocks, cursors} from '../../conf/i.js';
import {state_alloc as A} from '../../state/i.js';

export default (
    (e) => {
        var
            cursor = cursors[0],
            c = cursor.element,
            selection = cursor.selection,
            p = 0
        ;
        
        if (selection) {
            p = A.length_selection_blocks;

            if (p > 1) {
                range.setStartBefore(selection_blocks[1].element);
                range.setEndAfter(selection_blocks[p - 1].element);
                range.deleteContents();
            };

            selection_blocks[0].element.style.width = "0px";
            
            A.length_selections =
            A.length_selection_blocks = 
            A.length_selection_groups =
                1;
            
            cursor.selection = null;
        };

        c.classList.add("hidden");
    }
);
