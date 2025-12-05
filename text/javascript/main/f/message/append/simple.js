export default (
    (
        elements,
        element_i,
        element_l,

        src,

        appendChild,
        list,
        
        start,
        row_height,

        text_width_container,
        dom_text_width,
        max_width,
    ) => {
        var element = elements[element_i];
        return (
            ((element.firstElementChild).textContent = src),
            ((element.style).top = `${start}px`),

            appendChild(list, element),
            
            (start + row_height)
        );
    }
);
