

export default (
    (page,el,range,scroll) => {
        var with_scroll = page + scroll;
        return (
            ((page + el) >= range)
            ? (with_scroll - el)
            : with_scroll
        );
    }
);