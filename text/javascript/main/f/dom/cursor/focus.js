

export default (
    (A, cursor, width, selections, groups, selection_blocks, list_selections, range) => {
        var
            selection = cursor.selection,

            group = groups[0],
            sblock = selection_blocks[0],
            token = cursor.token,

            cursor_el = cursor.element,
            sblock_el = sblock.element,

            cl = cursor_el.classList,

            style = cursor_el.style,

            prev_w = A.length_selection_blocks
        ;

        

        if (prev_w > 1) {
            range.setStartBefore(selection_blocks[1].element);
            range.setEndAfter(selection_blocks[prev_w - 1].element);
            range.deleteContents();
        };

        style.top = `${token.top}px`;
        style.left = `${token.left + width}px`;
        style.height = `${token.height}px`;
        sblock_el.style.width = "0px";
        
        prev_w || (list_selections.appendChild(sblock_el));
        
        selection ||= (cursor.selection = selections[0]);

        
        selection.left_start = width;
        selection.direction = 0;
        
        sblock.start =
        sblock.end =
        selection.start =
        selection.end =
        selection.offset =
            cursor.token_start;

        sblock.block =
        group.block =
            token.block;

        selection.set_uni_token(token);

        selection.l = ((selection.i = group.index) + 1);
        group.l = ((group.i = sblock.index) + 1);
        sblock.l = ((sblock.i = token.index) + 1);

        A.length_selection_set(1);
        cl.remove("hidden");
    }
);
