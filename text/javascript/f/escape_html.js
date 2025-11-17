

export default (
    () => (c) => {
        return (
            (c === "<")
            ? "&lt;"
            :
            c === ">"
            ? "&gt;"
            : c
        );
    }
)