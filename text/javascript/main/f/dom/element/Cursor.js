


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

Cursor.prototype = {
    default: (
        (Cursor) => {
            var n=null;
            return new Cursor(0,n,n,0,n);
        }
    ),

    setup(index, element, token) {
        this.index = index;
        this.element = element;
        this.token = token;
    }
};

export default Cursor;
