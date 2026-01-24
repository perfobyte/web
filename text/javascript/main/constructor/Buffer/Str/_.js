import f from './f/i.js';

function BufferStr(
    index,
    value,
) {
    this.index = index;
    this.value = value;
};

BufferStr.prototype = f;

export default BufferStr;
