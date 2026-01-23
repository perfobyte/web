

export default (
    (A, cursor, selection_blocks, range) => {
        var
            selection = cursor.selection,
            p = A.length_selection_blocks
        ;

        if (selection) {
            if (p > 0) {
                range.setStartBefore(selection_blocks[0].element);
                range.setEndAfter(selection_blocks[p - 1].element);
                range.deleteContents();
            };
            
            A.length_selection_set(0);
            cursor.selection = null;
        };
        
        cursor.element.classList.add("hidden");
    }
);
