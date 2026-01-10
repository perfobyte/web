


function Cursor(
    id,
    element,
    
    token,
    token_start,

    selection,
) {
    this.id = id;
    this.element = element;
    
    this.token = token;
    this.token_start = token_start;

    this.selection = selection;
};

Cursor.prototype = {
    default: (
        (Cursor, id, element) => {
            var n = null;
            return new Cursor(
                id,
                element,
                n,0,n
            )
        }
    ),
};

export default Cursor;
