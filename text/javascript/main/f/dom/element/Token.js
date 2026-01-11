
function Token(
    id, element, row,
    message, block,

    start, end, length, position,

    top, right, bottom, left,
    width, height,
) {
    this.id = id;
    this.element = element;
    this.row = row;

    this.message = message;
    this.block = block;

    this.start = start;
    this.end = end;
    this.length = length;
    this.position = position;

    this.top = top;
    this.left = left;

    this.bottom = bottom;
    this.right = right;

    this.width = width;
    this.height = height;
};

Token.prototype = {
    default: (Token, i, element) => {
        var n = null;
        return new Token(
            i,element,n,
            n,n,
            0,0,0,2,
            0,0,0,0,
            0,0,
        )
    }
};

export default Token;
