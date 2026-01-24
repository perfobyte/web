import f from './f/i.js';

function Cursor(
    index,
    element,
    
    token,
    token_start,

    selection,
) {
    this.index = index;
    this.element = element;
    
    this.token = token;
    this.token_start = token_start;

    this.selection = selection;
};

Cursor.prototype = f;

export default Cursor;
