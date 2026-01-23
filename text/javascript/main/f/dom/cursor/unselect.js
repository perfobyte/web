

export default (
    (A, cursor, selection_blocks, selection_groups, range, focus) => {
        var
            selection = cursor.selection,
            p = A.length_selection_blocks,

            sblock = null,
            group = null
        ;

        if (selection) {
            if (p > 1) {
                range.setStartBefore(selection_blocks[1].element);
                range.setEndAfter(selection_blocks[p - 1].element);
                range.deleteContents();
            };
    
            focus(A, cursor, selection_groups, selection_blocks);
        };
    }
);
