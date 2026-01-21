
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

SelectionBlock.prototype = {
    default: (
        (SelectionBlock) => {
            return (
                new SelectionBlock(
                    0,null,
                    null,0,0,
                    0,0,
                )
            )
        }
    ),

    setup(index, element) {
        this.index = index;
        this.element = element;
    },

    bind_to_token(token) {
        this.l = ((this.i = token.index) + 1);
    },

    assign_token_boundaries(token) {
        this.start = token.start;
        this.end = token.end;
    },

    set_boundaries(start, end) {
        this.start = start;
        this.end = end;
    }
};

export default SelectionBlock;
