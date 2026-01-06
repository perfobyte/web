
function Token(
    i, element,

    x,y,

    start, end, length, position,

    message, block,
    
    top, right, bottom, left,

    width, height,
) {
    this.i = i;
    this.element = element;

    this.x = x;
    this.y = y;
    
    this.start = start;
    this.end = end;
    this.length = length;
    this.position = position;

    this.message = message;
    this.block = block;
    
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;

    this.width = width;
    this.height = height;
};

Token.prototype = {
    default: (Token, i, element) => {
        return new Token(
            i,element,
            0,0,
            0,0,0,2,
            null,null,
            0,0,0,0,
            0,0,
        )
    },
};

export default Token;
