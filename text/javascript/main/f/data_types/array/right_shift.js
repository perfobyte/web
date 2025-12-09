
// to = array.length - 1;
// var i = (index + 1);

export default (
    (array, from, to) => {
        while (from > to) {
            array[from--] = array[from];
        };
        return array;
    }
);

// replaced by buffer.copyWithin(to, from, length);
