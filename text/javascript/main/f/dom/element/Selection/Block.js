
function SelectionBlock(
    id,
    element,
    block,

    i,
    l,

    start,
    end,
) {
    this.id = id;
    this.element = element;
    this.block = block;
    
    this.i = i;
    this.l = l;

    this.start = start;
    this.end = end;
};

SelectionBlock.prototype = {
    default: (
        (SelectionBlock, id, element) => {
            return (
                new SelectionBlock(
                    id,element,
                    null,0,0,
                    0,0,
                )
            )
        }
    ),

    bind_to_token(token) {
        this.l = (this.i = token.id) + 1;
    },

    assign_token_boundaries(token) {
        this.start = token.start;
        this.end = token.end;
        console.log(token.start, token.end);
    },

    set_boundaries(start, end) {
        this.start = start;
        this.end = end;
        console.log(start, end);
    }
};

export default SelectionBlock;
