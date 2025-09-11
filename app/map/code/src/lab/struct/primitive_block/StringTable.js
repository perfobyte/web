

export default (length) => (
    Array(
        { length },
        (v,i) => {
            return (
                (i === 0)
                ? ""
                : new String()
            )
        }
    )
);
