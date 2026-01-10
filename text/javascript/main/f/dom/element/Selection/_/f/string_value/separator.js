
// token = token_start

export default (
    (
        groups,
        sblocks,
        tokens,
        
        i,l,

        block_offset,
        block_end,

        direction,
        AS,
    ) => {
        var
            group = groups[i],
            block = group.block,
            
            value = "",
            group_string_value = null,
            block_value = "",

            token = null,

            z = 0,
            x = 0
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
                        value_separator,
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
            block_value = block.value;

            value = (block.value.substring(block_offset,block_end));
        }
        
        return value;
    }
);
