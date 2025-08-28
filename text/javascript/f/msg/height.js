

export default (
    (rows) => {
        return (
            rows > 1
            ? 60 + ((rows - 2) * 24)
            : 30
        );
    }
);
