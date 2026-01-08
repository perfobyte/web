

function Selection(
    i,

    block_start,
    block_end,
    
    token_start,
    token_start_start,

    token_end,
    token_end_end,
) {
    this.i = i;
    
    this.block_start = block_start;
    this.block_end = block_end;

    this.token_start = token_start;
    this.token_start_start = token_start_start;

    this.token_end = token_end;
    this.token_end_end = token_end_end;
}

Selection.prototype = {
    default: (
        (Selection, i) => {
            var n = null;
            return (
                new Selection(
                    i,
                    n,n,
                    n,0,
                    n,0,
                )
            )
        }
    )
};

export default Selection;
