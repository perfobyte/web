

function Selection(
    i,
    selected,
    
    token_start,
    token_start_start,

    token_end,
    token_end_end,
) {
    this.i = i;
    this.selected = selected;
    
    this.token_start = token_start;
    this.token_start_start = token_start_start;

    this.token_end = token_end;
    this.token_end_end = token_end_end;
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
