import * as f from './f/i.js';

function Selection(
    index,
    
    i,l,

    token_left,token_right,
    token_start,token_end,

    left_start,left_end,
    
    offset,start,end,

    direction,
) {
    this.index = index;
    
    this.i = i;
    this.l = l;

    this.token_left = token_left;
    this.token_right = token_right;

    this.token_start = token_start;
    this.token_end = token_end;

    this.left_start = left_start;
    this.left_end = left_end;

    this.offset = offset;
    this.start = start;
    this.end = end;

    this.direction = direction;
};

Selection.prototype = f;

export default Selection;
