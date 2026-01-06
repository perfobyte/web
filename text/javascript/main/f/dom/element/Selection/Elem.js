
function SelectionElem(
    i,
    element,

    token_start,
    token_end,

    elem_top,
    elem_height,

    top,
    left,
    width,
    height,
) {
    this.i = i;
    this.element = element;

    this.token_start = token_start;
    this.token_end = token_end;
    
    this.elem_top = elem_top;
    this.elem_height = elem_height;
};

SelectionElem.prototype = {
    default: (
        (SelectionElem, i, element) => {
            return (
                new SelectionElem(
                    i,element,
                    null,
                    0,0,0,0,
                )
            )
        }
    ),

    top() {
        return this.elem_top.top;
    },

    right() {
        return this.token_end.right;
    },

    bottom() {
        //
        return this.elem_height.bottom;
    },

    left() {
        return this.token_start.left;
    },

    height() {
        return this.elem_height.height;
    },

    width() {
        return (
            (this.token_end.right)
            - (this.token_start.left)
        );
    }
}

export default SelectionElem;
