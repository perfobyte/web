

export default (
    (
        cursor_elems,
        elements,
        text_width_container,
    ) => {
        
        var
            i = 0,
            l = cursor_elems.length,

            c = null,
            c_el = null,
            s = null,

            x = 0,
            y = 0,

            px = 0,

            left = 0,
            e = null,

            offset = 0
        ;
        
        for(; i < l; i++) {
            c = cursor_elems[i];

            x = c.x;
            y = c.y;

            e = elements[y];
            
            c_el = c.element;
            s = c_el.style;

            offset = e.start;

            text_width_container.textContent = (
                e.block.value.substring(offset,(offset + x))
            );

            left = (e.left + text_width_container.getBoundingClientRect().width);
            
            s.top = `${e.top}px`;
            s.left = `${left}px`;
        }
    }
);
