export default (
    (
        coords,
        chars_number_reduce,
        count,

        fromCodePoint,
        Float32Array,

        default_row_inline_class,
        text_width_container,
    ) => {
        var
            i = 0,
            l = 0,

            c = "",

            length = coords.reduce(chars_number_reduce,0),
            map = new Float32Array(length),

            coord_i = 0,
            coord_l = coords.length,

            coord = null,
            loaded = 0
        ;
        
        text_width_container.className = default_row_inline_class;

        var node = new Text("");
        text_width_container.replaceChildren(node);

        for (; coord_i < coord_l; coord_i++) {
            i = (coord = coords[coord_i])[0];
            l = coord[1];

            while (i < l) {
                node.data = fromCodePoint(i++).repeat(count);
                
                map[loaded++] = (
                    (text_width_container.offsetWidth)
                    / count
                );
            }
        }

        return map;
    }
);
