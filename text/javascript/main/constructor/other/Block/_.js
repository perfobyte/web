import f from './f/i.js';

function Block(
    index,
    start,
    end,
    buffer,
) {
    this.index = index;
    this.start = start;
    this.end = end;
    this.buffer = buffer;
};

Block.prototype = f;

export default Block;