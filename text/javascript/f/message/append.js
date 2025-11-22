export default (
    (
        e,
        message_class,
        src,
        top,
        list
    ) => {
        return void (
            e.classList.add(message_class),
            (e.firstElementChild.textContent = src),
            ((e.style).top = top),
            
            list.appendChild(e)
        );
    }
);
