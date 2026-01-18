

function BufferStr(
    id,
    value,
) {
    this.id = id;
    this.value = value;
};

BufferStr.prototype = {
    default: (
        (BufferStr, id) => {
            return (
                new BufferStr(id, "")
            )
        }
    ),
};

export default BufferStr;
