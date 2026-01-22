
import f from './f/i.js';

function SelectionBlock(
    index,
    element,

    block,
    start,
    end,

    i,
    l,
) {
    this.index = index;
    this.element = element;

    this.block = block;
    this.start = start;
    this.end = end;

    this.i = i;
    this.l = l;
};

SelectionBlock.prototype = f;

export default SelectionBlock;
