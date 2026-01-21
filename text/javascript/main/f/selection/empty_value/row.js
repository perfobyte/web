

export default (
    (arrays) => {
        var token = arrays.cursors[0].token;
        return (
            (token.row)
            .string_value(arrays.tokens)
        );
    }
);
