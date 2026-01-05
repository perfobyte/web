
function SelectionElem(
    i,
    element,

    elem_start,
    elem_end,

    elem_top,
    elem_height,

    top,
    left,
    width,
    height,
) {
    this.i = i;
    this.element = element;

    this.elem_start = elem_start;
    this.elem_end = elem_end;
    
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
        return this.elem_end.right;
    },

    bottom() {
        //
        return this.elem_height.bottom;
    },

    left() {
        return this.elem_start.left;
    },

    height() {
        return this.elem_height.height;
    },

    width() {
        return (
            (this.elem_end.right)
            - (this.elem_start.left)
        );
    }
}

export default SelectionElem;
