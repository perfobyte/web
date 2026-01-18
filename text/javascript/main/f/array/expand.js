

export default (
    (required, length, block_size, array, Default, constructor) => {
        while (required >= length) {
            length += block_size;
        };
        
        while (required < length) {
            array.push(Default(constructor));
            required++;
        };
        return length;
    }
);
