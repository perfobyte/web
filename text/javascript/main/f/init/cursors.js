

export default (
    (
        elems_cursor,
        elems,
        TW,
        width,
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
            
            start_elem = null,
            start_block_value = "",
            chunk = "",

            direction = 0,

            end_elem = null,
            
            offset = 0
        ;
        
        for(; i < l; i++) {
            c = elems_cursor[i];
            start_elem = c.start_elem;
            start_block_value = start_elem.block.value;

            direction = c.direction;
            
            if (direction === 0) {
                c_el = c.element;
                s = c_el.style;

                offset = start_elem.start;

                TW.replaceChildren(
                    new Text(
                        start_block_value.substring(
                            offset,
                            (offset + c.start_elem_start)
                        )
                    )
                );
                
                left = (start_elem.left + TW.offsetWidth);
                
                s.top = `${start_elem.top}px`;
                s.left = `${left}px`;

                s.width = `${width}px`;
                s.height = `${start_elem.height}px`
            }
        }
    }
);
