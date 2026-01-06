


function Cursor(
    element,
    i,
    
    token,
    token_start,

    selection_direction,
    selection,
) {
    this.element = element;
    this.i = i;
    
    this.token = token;
    this.token_start = token_start;

    this.selection_direction = selection_direction;
    this.selection = selection;
};

Cursor.prototype = {
    default: (
        (Cursor, element, i, token, selection) => {
            return new Cursor(element,i,token,0,0,selection)
        }
    ),
};

export default Cursor;
