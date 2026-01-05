


function Cursor(
    element,
    i,
    
    elem,
    elem_start,

    selection_direction,
) {
    this.element = element;
    this.i = i;
    
    this.elem = elem;
    this.elem_start = elem_start;

    this.selection_direction = selection_direction;
};

Cursor.prototype = {
    default: (
        (Cursor, element, i, elem, selection) => {
            return new Cursor(element,i,elem,0,0,selection)
        }
    ),

    row_col:(elem, elem_col) => {
        return (elem.x + elem_col);
    },
    row:(elem) => {
        return elem.y;
    },
    block_offset: (
        (E, col) => {
            return E.start + col;
        }
    ),
    block: (
        (E) => {
            return E.block
        }
    ),
};
// cursor.start_col = start_col;
// cursor.start_row = E.y;

// cursor.start_block_start = (
//     E.start
//     + (cursor.elem_start)
// );

// cursor.start_block = E.block;

export default Cursor;
