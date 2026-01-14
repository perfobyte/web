

function Row(
    id,
    element,

    i,
    l,

    width,
    height,
) {
    this.id = id;
    this.element = element;

    this.i = i;
    this.l = l;

    this.width = width;
    this.height = height;
};

Row.prototype = {
    default: (
        (Row,id,element) => {
            return (
                new Row(
                    id,element,
                    0,0,
                    null,null,
                )
            );
        }
    )
};

export default Row;
