

function BufferStr(
    index,
    value,
) {
    this.index = index;
    this.value = value;
};

BufferStr.prototype = {
    default: (
        (BufferStr) => {
            return (
                new BufferStr(0,"")
            )
        }
    ),

    setup(index) {
        this.index = index;
    },
};

export default BufferStr;
