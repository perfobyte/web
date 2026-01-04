


function Cursor(
    element,
    i,
    direction,

    start_elem,
    start_elem_start,

    end_elem,
    end_elem_end,
) {
    this.element = element;

    this.i = i;
    this.direction = direction;

    this.start_elem = start_elem;
    this.start_elem_start = start_elem_start;

    this.end_elem = end_elem;
    this.end_elem_end = end_elem_end;
};

Cursor.prototype = {
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
//     + (cursor.start_elem_start)
// );

// cursor.start_block = E.block;

export default Cursor;
