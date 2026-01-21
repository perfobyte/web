

export default (
    (arrays) => {
        var token = arrays.cursors[0].token;
        return (
            (token.message)
            .string_value()
        );
    }
);
