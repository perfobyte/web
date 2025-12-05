export default (
    (
        coords,
        chars_number_reduce,
        count,

        fromCodePoint,
        Float32Array,

        dom_text_width,
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

        for (; coord_i < coord_l; coord_i++) {
            i = (coord = coords[coord_i])[0];
            l = coord[1];

            while (i < l) {
                map[loaded++] = (
                    dom_text_width(
                        text_width_container,
                        fromCodePoint(i++).repeat(count)
                    )
                    / count
                );
            }
        }

        return map;
    }
);
