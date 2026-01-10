
function SelectionBlock(
    id,
    element,
    block,

    i,
    l,
) {
    this.id = id;
    this.element = element;
    this.block = block;
    
    this.i = i;
    this.l = l;
};

SelectionBlock.prototype = {
    default: (
        (SelectionBlock, id, element) => {
            return (
                new SelectionBlock(
                    id,element,
                    null,0,0,
                )
            )
        }
    ),
};

export default SelectionBlock;
