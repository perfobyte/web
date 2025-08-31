
export default (
    (page,el,range) => {
        return (
            ((page + el) >= range)
            ? (range - el)
            : page
        );
    }
);
