

function Row(
    i,
    element,
) {
    this.i = i;
    this.element = element
};

Row.prototype = {
    default: (
        (Row,i,element) => {
            return (
                new Row(
                    i,
                    element
                )
            );
        }
    )
};

export default Row;
