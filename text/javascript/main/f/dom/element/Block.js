
function Block(
    id,
    start,
    end,
    buffer,
) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.buffer = buffer;
};

Block.prototype = {
    default: (
        (Block, id) => {
            return new Block(id, 0, 0, null);
        }
    ),
    string_value() {
        var t = this;
        return(
            (t.buffer.value).substring(t.start, t.end)
        );
    },
    
    size: 0,
    index_last: 0,
};

export default Block;