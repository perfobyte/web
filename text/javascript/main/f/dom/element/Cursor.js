


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
        (Cursor, id, element, token) => {
            return new Cursor(
                id,
                element,
                token,
                0,
                null,
            )
        }
    ),
};

export default Cursor;
