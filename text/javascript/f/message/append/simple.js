export default (
    (
        element,
        src,

        appendChild,
        list,
        
        start,
        row_height,

        text_width_container,
        dom_text_width,
        max_width,
    ) => {
        return (
            ((element.firstElementChild).textContent = src),
            ((element.style).top = `${start}px`),

            appendChild(list, element),
            
            (start + row_height)
        );
    }
);
