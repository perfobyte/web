

export default (
    (
        cursors,
        tokens,
        selection_groups,
        selection_blocks,
        

        TW,
        node_text,
        width_cursor,
        zoom,
    ) => {
        
        var
            i = 0,
            l = cursors.length,

            c = null,
            c_el = null,
            s = null,

            x = 0,
            y = 0,

            px = 0,

            left = 0,
            
            token = null,
            block_value = "",
            chunk = "",

            direction = 0,

            end_elem = null,

            s = null,

            sg_i = 0,
            sg_l = 0,

            sb_i = 0,
            sb_l = 0,

            sb_el = null,

            sgroup = null,
            sblock = null,
            block = null,

            style = null,
            
            offset = 0
        ;

        TW.replaceChildren(node_text);
        
        for(; i < l; i++) {
            c = cursors[i];
            token = c.token;
            block_value = token.block.value;
            
            c_el = c.element;
            s = c_el.style;

            offset = token.start;

            node_text.textContent = (
                block_value.substring(
                    offset,
                    (c.token_start)
                )
            );
            
            left = (token.left + TW.offsetWidth);
            
            s.top = `${token.top}px`;
            s.left = `${left}px`;

            px = width_cursor(zoom);
            s.width = `${px}px`;
            s.height = `${token.height}px`

            if (s = c.selection) {

                sg_i = s.i;
                sg_l = s.l;
                for(;sg_i<sg_l;sg_i++) {
                    sgroup = selection_groups[sg_i];
                    
                    block = sgroup.block;
                    block_value = block.value;

                    sb_i = sgroup.i;
                    sb_l = sgroup.l;
                    
                    for(;sb_i < sb_l; sb_i++){
                        sblock = selection_blocks[sb_i];
                        token = tokens[sblock.i];
                        
                        sb_el = sblock.element;
                        style = sb_el.style;

                        style.top = `${token.top}px`;
                        style.height = `${token.height}px`;

                        
                        offset = token.start;
                        px = sblock.start;
                        console.log(offset, px, sblock.end);
                        
                        node_text.textContent = (block_value.substring(offset, px));
                        console.log(block_value.substring(offset, px));
                        console.log(block_value.substring(sblock.start, sblock.end))
                        

                        
                        style.left = `${token.left + TW.offsetWidth}px`;

                        node_text.textContent = (block_value.substring(px, sblock.end));
                        style.width = `${TW.offsetWidth}px`;
                    }
                }
            }
        }
    }
);
