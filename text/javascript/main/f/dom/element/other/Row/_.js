import f from './f/i.js';

function Row(
    index,
    element,
    
    i,l,
    width,height,
) {
    this.index = index;
    this.element = element;
    
    this.i = i;
    this.l = l;

    this.width = width;
    this.height = height;
};

Row.prototype = f;

export default Row;
