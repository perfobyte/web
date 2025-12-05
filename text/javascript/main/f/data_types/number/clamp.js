

export default (
    (value, min_value, max_value, min, max) => {
        return (
            max(
                min(value, max_value),
                min_value
            )
        )
    }
);
