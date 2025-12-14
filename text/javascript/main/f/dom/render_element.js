

export default (
    (
        element,
        string,

        offset,
        to,
    ) => {
        return (
            element
            .firstElementChild
            .textContent = (
                string.substring(offset, to)
            )
        );
    }
);
