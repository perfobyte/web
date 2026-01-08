

function Textarea(
    i,
    element,
) {
    this.i = i;
    this.element = element;
};

Textarea.prototype = {
    default: (
        (Textarea, i, element) => {
            return new Textarea(i, element);
        }
    )
};

export default Textarea;
