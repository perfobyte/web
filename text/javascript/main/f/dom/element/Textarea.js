

function Textarea(
    index,
    element,
) {
    this.index = index;
    this.element = element;
};

Textarea.prototype = {
    default: (
        (Textarea) => {
            return new Textarea(0, null);
        }
    ),

    setup(index, element) {
        this.index = index;
        this.element = element;
    }
};

export default Textarea;
