
function Block(
    id,
    offset,
    value,
) {
    this.id = id;
    this.offset = offset;
    this.value = value;
};

Block.prototype = {
    default: (
        (Block, id) => {
            return new Block(id, 0,"");
        }
    ),
    size: 0,
};

export default Block;