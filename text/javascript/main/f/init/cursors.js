

export default (
    (
        elems_cursor,
        elems,
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
            
            elem = null,
            start_block_value = "",
            chunk = "",

            direction = 0,

            end_elem = null,
            
            offset = 0
        ;

        TW.replaceChildren(node_text);
        
        for(; i < l; i++) {
            c = elems_cursor[i];
            elem = c.elem;
            start_block_value = elem.block.value;
            
            c_el = c.element;
            s = c_el.style;

            offset = elem.start;

            node_text.data = (
                start_block_value.substring(
                    offset,
                    (offset + c.elem_start)
                )
            );        
            
            left = (elem.left + TW.offsetWidth);
            
            s.top = `${elem.top}px`;
            s.left = `${left}px`;

            s.width = `${width}px`;
            s.height = `${elem.height}px`
        }
    }
);
