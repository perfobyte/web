

function Input(
    i,
    element,
) {
    this.i = i;
    this.element = element;
};

Input.prototype = {
    default: (
        (Input, i, element) => {
            return new Input(i, element);
        }
    )
};

export default Input;
