

function Buffer(
    id,
    value,
) {
    this.id = id;
    this.value = value;
};

Buffer.prototype = {
    default: (
        (Buffer, id) => {
            return (
                new Buffer(id, "")
            )
        }
    ),
};

export default Buffer;
