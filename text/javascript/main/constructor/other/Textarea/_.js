import f from './f/i.js';

function Textarea(
    index,
    element,
) {
    this.index = index;
    this.element = element;
};

Textarea.prototype = f;

export default Textarea;
