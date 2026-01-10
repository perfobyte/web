

function Row(
    i,
    element,

    token_start,
    token_end,

    width,
    height,
) {
    this.i = i;
    this.element = element;

    this.token_start = token_start;
    this.token_end = token_end;

    this.width = width;
    this.height = height;
};

Row.prototype = {
    default: (
        (Row,i,element) => {
            return (
                new Row(
                    i,element,
                    null,null,
                    null,null,
                )
            );
        }
    )
};

export default Row;
