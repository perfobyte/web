
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

Block.prototype = {
    default: (
        (Block) => {
            return new Block(0,0,0,null);
        }
    ),

    setup(index) {
        this.index = index;
    },

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