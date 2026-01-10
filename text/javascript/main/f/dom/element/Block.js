
function Block(
    i,
    offset,
    value,
) {
    this.i = i;
    this.offset = offset;
    this.value = value;
};

Block.prototype = {
    size: 0,
};

export default Block;