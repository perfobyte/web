
// token = token_start

export default (
    (
        a,
        
        i,l,

        bf_offset,
        bf_end,

        selection_empty_value,
        ss,
    ) => {
        var
            messages = a.messages,
            groups = a.selection_groups,
            sblocks = a.selection_blocks,
            tokens = a.tokens,

            group = groups[i],
            block = group.block,

            buffer = block.buffer,
            buffer_value = buffer.value,
            
            value = "",
            group_string_value = null
        ;
        if ((l-i)>1) {
            group_string_value = group.string_value;

            value = (
                buffer_value.substring(
                    bf_offset,
                    ((tokens[sblocks[group.i].i]).end)
                )
            );
            i++;
            l--;
            
            for (;i < l; i++) {
                group = groups[i];
                block = group.block;
                buffer_value = block.buffer.value;
                
                value += (
                    group_string_value(
                        sblocks,
                        tokens,
                        buffer_value,
                        group.i,
                        group.l,
                    )
                );
            };
            
            group = groups[i];
            block = group.block;
            buffer_value = block.buffer.value;
            
            value += (
                buffer_value.substring(
                    (tokens[sblocks[group.l-1].l-1].start),
                    (bf_end)
                )
            );
        }
        else {
            value = (
                (bf_offset === bf_end)
                ? selection_empty_value[ss.state_mode.selection_empty](a,ss)
                : buffer_value.substring(bf_offset, bf_end)
            );
        }
        
        return value;
    }
);
