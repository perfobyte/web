
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
            n = null,
            group = groups[i],
            block = group.block,
            
            value = "",
            block_value = "",

            group_string_value = n,
            token = n,
            sblock = n,

            message_i = 0,
            message_l = 0,

            sblock_i = 0,
            sblock_l = 0,

            token_i = 0,
            token_l = 0
        ;
        
        if ((l-i)>1) {
            group_string_value = group.string_value;

            sblock_i = group.i;
            sblock_l = group.l;
            
            for(;sblock_i < sblock_l; sblock_i++) {
                sblock = sblocks[sblock_i];

                block = sblock.block;
                block_value = block.value;
                
                token_i = sblock.i;
                token_l = sblock.l;

                for(;token_i < token_l; token_i++) {
                    token = tokens[token_i];
                }
            };

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
