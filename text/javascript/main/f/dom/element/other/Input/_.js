import f from './f/i.js';

function Input(
    index,
    element,
) {
    this.index = index;
    this.element = element;
};

Input.prototype = f;

export default Input;
