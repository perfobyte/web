
function Token(
    id, element, row,

    x,y,

    start, end, length, position,

    message, block,
    
    top, right, bottom, left,

    width, height,
) {
    this.id = id;
    this.element = element;
    this.row = row;

    this.x = x;
    this.y = y;
    
    this.start = start;
    this.end = end;
    this.length = length;
    this.position = position;

    this.message = message;
    this.block = block;
    
    this.top = top;
    this.left = left;

    this.bottom = bottom;
    this.right = right;

    this.width = width;
    this.height = height;
};

Token.prototype = {
    default: (Token, i, element) => {
        return new Token(
            i,element,null,
            0,0,
            0,0,0,2,
            null,null,
            0,0,0,0,
            0,0,
        )
    }
};

export default Token;
