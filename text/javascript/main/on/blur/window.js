
export default (
    (e) => {
        var
            window = e.currentTarget,
            document = window.document,
            
            active_el = document.activeElement
        ;

        (active_el === document.body)
        ||
        (active_el.blur());
    }
);
