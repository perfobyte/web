

function Selection(
    i,
    selected,
    
    elem_start,
    elem_start_start,

    elem_end,
    elem_end_end,
) {
    this.i = i;
    this.selected = selected;
    
    this.elem_start = elem_start;
    this.elem_start_start = elem_start_start;

    this.elem_end = elem_end;
    this.elem_end_end = elem_end_end;
}

Selection.prototype = {
    default: (
        (Selection, i) => {
            return (
                new Selection(
                    i,
                    0,
                    null,0,
                    null,0,
                )
            )
        }
    )
};

export default Selection;
