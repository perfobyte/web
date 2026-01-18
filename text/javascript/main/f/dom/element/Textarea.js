

function Textarea(
    id,
    element,
) {
    this.id = id;
    this.element = element;
};

Textarea.prototype = {
    default: (
        (Textarea, id, element) => {
            return new Textarea(id, element);
        }
    )
};

export default Textarea;
