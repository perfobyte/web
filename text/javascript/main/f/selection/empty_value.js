

export default {
    0: (() => ""),
    1: (arrays) => {
        return (
            (arrays.cursors[0].token.row)
            .string_value(arrays.tokens)
        );
    },
    2: (arrays) => {
        return (
            (arrays.cursors[0].token.message)
            .string_value()
        );
    },
    3: (arrays) => {
        return (
            (arrays.cursors[0].token.block)
            .string_value()
        );
    },
}