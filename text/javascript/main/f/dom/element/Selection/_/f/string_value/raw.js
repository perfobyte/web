
// token = token_start

export default (
    (
        messages,
        groups,
        sblocks,
        tokens,
        
        i,l,

        block_offset,
        block_end,

        state_app,
    ) => {
        var
            group = groups[i],
            block = group.block,
            
            value = "",
            group_string_value = null
        ;
        
        if ((l-i)>1) {
            group_string_value = group.string_value;

            value = (
                block.value.substring(
                    block_offset,
                    ((tokens[sblocks[group.i].i]).end)
                )
            );
            i++;
            l--;
            
            for (;i < l; i++) {
                group = groups[i];
                block = group.block;
                value += (
                    group_string_value(
                        sblocks,
                        tokens,
                        block.value,
                        group.i,
                        group.l,
                    )
                );
            };
            
            group = groups[i];
            block = group.block;
            
            value += (
                block.value.substring(
                    (tokens[sblocks[group.l-1].l-1].start),
                    (block_end)
                )
            );
        }
        else {
            value = (block.value.substring(block_offset,block_end));
        }
        
        return value;
    }
);
