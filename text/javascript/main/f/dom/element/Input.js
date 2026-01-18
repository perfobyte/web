

function Input(
    id,
    element,
) {
    this.id = id;
    this.element = element;
};

Input.prototype = {
    default: (
        (Input, id, element) => {
            return new Input(id, element);
        }
    )
};

export default Input;
