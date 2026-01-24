import f from './f/i.js';

function Token(
    index, element, row,
    message, block,

    start, end, position,

    top, right, bottom, left,
    width, height,
) {
    this.index = index;
    this.element = element;

    this.row = row;

    this.message = message;
    this.block = block;

    this.start = start;
    this.end = end;
    this.position = position;

    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;

    this.width = width;
    this.height = height;
};

Token.prototype = f;

export default Token;
