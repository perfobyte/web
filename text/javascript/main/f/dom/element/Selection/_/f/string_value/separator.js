
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
            n = null,
            group = groups[i],
            block = group.block,
            
            value = "",
            
            sblock = sblocks[group.i],
            token = tokens[sblock.i],
            message = token.message,
            
            message_i = (message.i),
            message_l = (tokens[sblocks[groups[l - 1].l - 1].l - 1].message.i) + 1,

            separator = state_app.separator
        ;
        
        if ((message_l - message_i) > 0) {
            if (
                (block_offset === block_end)
                &&
                (block === messages[message_l - 1].block)
            ) {
                debugger;
                
                value = separator();
            }
            else {
                value = (
                    message.block.value.substring(
                        block_offset,
                        (tokens[message.tokens_l - 1].end)
                    )
                    + separator()
                );
                debugger;
                message_i++;

                message_l--;
                

                for (;message_i < message_l; message_i++) {
                    message = messages[message_i];

                    var dbg_v = (message.block.value).substring(
                        (tokens[message.tokens_i].start),
                        (tokens[message.tokens_l - 1].end)
                    )
                    + separator()
                    
                    value += (
                        dbg_v
                    );
                    debugger;
                };

                message = messages[message_i];
                var d = (message.block.value).substring(
                    (tokens[message.tokens_i].start),
                    block_end
                )
                value += (
                    d
                );
                debugger;
            }
        }
        else {
            value = (message.block.value.substring(block_offset, block_end));
        }        

        console.log(JSON.stringify(message.block.value), "\n\n",block_offset, block_end, JSON.stringify(value));
        
        return value;
    }
);
