

export default (
    (
        elems_cursor,
        tokens,
        TW,
        width,
        node_text,
    ) => {
        
        var
            i = 0,
            l = elems_cursor.length,

            c = null,
            c_el = null,
            s = null,

            x = 0,
            y = 0,

            px = 0,

            left = 0,
            
            token = null,
            start_block_value = "",
            chunk = "",

            direction = 0,

            end_elem = null,
            
            offset = 0
        ;

        TW.replaceChildren(node_text);
        
        for(; i < l; i++) {
            c = elems_cursor[i];
            token = c.token;
            start_block_value = token.block.value;
            
            c_el = c.element;
            s = c_el.style;

            offset = token.start;

            node_text.data = (
                start_block_value.substring(
                    offset,
                    (offset + c.token_start)
                )
            );        
            
            left = (token.left + TW.offsetWidth);
            
            s.top = `${token.top}px`;
            s.left = `${left}px`;

            s.width = `${width}px`;
            s.height = `${token.height}px`
        }
    }
);
