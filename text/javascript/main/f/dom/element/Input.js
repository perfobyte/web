

function Input(
    index,
    element,
) {
    this.index = index;
    this.element = element;
};

Input.prototype = {
    default: (
        (Input) => {
            return new Input(0, null);
        }
    ),
    setup(index, element) {
        this.index = index;
        this.element = element;
    },
};

export default Input;
