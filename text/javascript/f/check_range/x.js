
export default (
    (page,el,range) => {
        page
        return (
            ((page + el) >= range)
            ? (page - el)
            : page
        );
    }
);
