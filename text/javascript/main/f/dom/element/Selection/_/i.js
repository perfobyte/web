import * as f from './f/i.js';

function Selection(
    id,
    
    i,l,

    token_start,token_end,

    left_start,left_end,
    
    offset,
    end,

    direction,
) {
    this.id = id;
    
    this.i = i;
    this.l = l;
    
    this.token_start = token_start;
    this.token_end = token_end;

    this.left_start = left_start;
    this.left_end = left_end;

    this.offset = offset;
    this.end = end;

    this.direction = direction;
};

Selection.prototype = f;

export default Selection;
