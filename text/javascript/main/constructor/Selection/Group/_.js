import f from './f/i.js';

function SelectionGroup(
    index,
    block,
    
    i,
    l
) {
    this.index = index;
    this.block = block;
    
    this.i = i;
    this.l = l;
};

SelectionGroup.prototype = f;

export default SelectionGroup;
