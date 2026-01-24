
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
            
            group = null,
            sblock = null,
            token = null,
            message = null,

            block = null,
            next_block = null,
            
            bf_value = "",
            value = "",

            lm1 = 0,
            message_i = 0,
            message_l = 0,

            A = ss.state_alloc,
            AS = ss.state_app,
            separator = AS.separator,
            separator_block = AS.separator_block,

            l1 = 0,
            
            first_i = i,
            
            mi = 0,
            ml = 0,
            first_mi = 0,
            last_mi = 0
        ;
        
        if (bf_offset === bf_end) {
            value = (
                (A.length_selection_blocks === 1)
                ? selection_empty_value[ss.state_mode.selection_empty](a,ss)
                :
                (
                    (A.length_selection_groups > 1)
                    ? separator_block
                    : separator
                )()
            );
        }
        else {
            first_i = i;
            l1 = (l - 1);
            
            for(;i < l; i++) {
                group = groups[i];
                
                mi = (
                    group.token_first(tokens, sblocks)
                    .message.index
                );
                ml = (
                    group.token_last(tokens, sblocks)
                    .message.index + 1
                );

                first_mi = mi;
                lm1 = (ml - 1);
                
                for (;mi<ml;mi++) {
                    // debugger;

                    message = messages[mi];
                    
                    value += (
                        message
                        .value_buffer()
                        .substring(
                            (
                                (
                                    (i === first_i)
                                    &&
                                    (mi === first_mi)
                                )
                                ? bf_offset
                                : message.start
                            ),
                            (
                                (
                                    (i === l1)
                                    &&
                                    (mi === lm1)
                                )
                                ? bf_end
                                : message.end
                            )
                        )
                    );

                    (mi === lm1) || (value += separator());
                }

                (i === l1) || (value += separator_block());
            }
        }

        return value;
    }
);
