

export default (
    (blocks, id, i,l) => {
        var
            found_block = null,
            block = null
        ;
        while (i < l) {
            block = blocks[i];
            if (block.id === id) {
                found_block = block;
                break;
            };
        };
        return found_block;
    }
);
