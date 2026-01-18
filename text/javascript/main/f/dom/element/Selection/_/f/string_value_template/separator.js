
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
            blocks = a.blocks,

            n = null,
            group = groups[i],
            block = group.block,
            next_block = n,
            
            bf_value = (block.buffer.value),
            value = "",
            
            sblock = sblocks[group.i],
            token = tokens[sblock.i],
            message = token.message,
            
            message_i = (message.i),

            lm1 = l-1,
            message_l = (tokens[sblocks[groups[lm1].l - 1].l - 1].message.i) + 1,

            AS = ss.state_app,
            separator = AS.separator,
            separator_block = AS.separator_block,

            l1 = 0,
            
            first_i = i,
            
            mi = 0,
            ml = 0,
            first_mi = 0,
            last_ml = 0
        ;
        
        l1 = (message_l - message_i);

        if (l1 > 1) {
            
            a: {
                if (
                    (l1 === 2)
                    &&
                    (bf_offset === bf_end)
                ) {
                    value = (
                        (
                            (bf_offset % (block.size))
                            ? separator
                            : separator_block
                        )()
                    );
                    console.log("newline = ", (
                        (bf_offset % (block.size))
                        ? "block"
                        : "message"
                    ))
                    break a;
                };
                
                for(;i < l; i++) {
                    group = groups[i];
                    block = group.block;
                    sblock = sblocks[group.i];

                    mi = ((i === first_i) ? message_i: sblock.i);
                    ml = ((i === lm1) ? message_l: sblock.l);

                    first_mi = mi;
                    l1 = (ml - 1);
                    
                    for (;mi<ml;mi++) {
                        message = messages[mi];
                        bf_value = message.block.buffer.value;
                        
                        // debugger;
                        
                        value += (
                            bf_value.substring(
                                (
                                    (
                                        (first_i === i)
                                        &&
                                        (first_mi === mi)
                                    )
                                    ? bf_offset
                                    : tokens[message.tokens_i].start
                                ),
                                (
                                    (
                                        (lm1 === i)
                                        &&
                                        (l1 === mi)
                                    )
                                    ? bf_end
                                    : tokens[message.tokens_l - 1].end
                                )
                            )
                        );

                        ((i===lm1))
                        ? (
                            (mi === l1)
                            ||
                            (value += separator())
                        )
                        : (
                            value += (
                                (mi === l1)
                                ? separator_block
                                : separator
                            )()
                        );
                    }
                }
            }
        }
        else {
            value = (
                (bf_offset === bf_end)
                ? selection_empty_value[ss.state_mode.selection_empty](a,ss)
                : bf_value.substring(bf_offset, bf_end)
            );
        }
        
        return value;
    }
);
