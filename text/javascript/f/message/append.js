export default (
    (
        e,
        message_class,
        src,
        list,

        start,
        row_height,
    ) => {
        return (
            e.classList.add(message_class),
            (e.firstElementChild.textContent = src),
            ((e.style).top = `${start}px`),
            
            list.appendChild(e),

            (start + row_height)
        );
    }
);
