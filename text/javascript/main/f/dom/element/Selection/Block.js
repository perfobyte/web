
function SelectionBlock(
    i,
    element,
    token,

    top,
    right,
    bottom,
    left,

    width,
    height,
) {
    this.i = i;
    this.element = element;

    this.token = token;

    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    
    this.width = width;
    this.height = height;
};

SelectionBlock.prototype = {
    default: (
        (SelectionBlock, i, element) => {
            return (
                new SelectionBlock(
                    i,element,
                    null,
                    0,0,0,0,
                    0,0
                )
            )
        }
    ),
}

export default SelectionBlock;
