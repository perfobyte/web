
export default (
    function(
        tokens,
    ) {
        var
            r = this,
            i = r.i,
            l = r.l,
            
            value = "",

            token = tokens[i++],

            block = token.block,

            buffer = block.buffer,
            buffer_value = buffer.value,

            next_block = null,

            offset = token.start,
            end = token.end,

            l1 = 0
        ;
        if (i === l) {
            value = buffer_value.substring(offset, end);
        }
        else {
            l1 = (l - 1);
            for(;i < l; i++){
                token = tokens[i];
                next_block = (token.block);

                if (i === l1) {
                    value += (buffer_value.substring(offset, token.end));
                }
                else {
                    if (next_block !== block) {
                        value += (buffer_value.substring(offset, end));
                        offset = (token.start);
                        buffer_value = next_block.value;
                    }
                    end = (token.end);
                }
            };
        };
        return value;
    }
);
