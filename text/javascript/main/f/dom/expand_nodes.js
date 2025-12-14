

export default (
    (
        elems,
        i,
        template,
        alloc_state,
    ) => {
        var
            size_elements = alloc_state.size_elements,
            l = elems.length,

            new_length = (l + size_elements)
        ;
        elems.length = new_length;
        while (l < new_length) {
            elems[l++] = template.cloneNode(true)
        };
    }
);
