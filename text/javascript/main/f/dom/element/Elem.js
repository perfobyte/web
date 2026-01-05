
function Elem(
    element,
    i,
    x,
    y,

    start,
    end,
    length,
    position,

    message,
    block,
    
    top,
    right,
    bottom,
    left,

    width,
    height,
) {
    this.element = element;
    this.i = i;
    this.x = x;
    this.y = y;

    this.start = start;
    this.end = end;
    this.length = length;
    this.position = position;

    this.message = message;
    this.block = block;
    
    this.top = top;
    this.right = right;
    this.bottom = bottom,
    this.left = left;

    this.width = width;
    this.height = height;
};

Elem.prototype = {
    default: (Elem, element) => {
        return new Elem(
            element,
            0,0,0,
            0,0,0,2,
            null,null,
            0,0,0,0,
            0,0,
        )
    },
};

export default Elem;
