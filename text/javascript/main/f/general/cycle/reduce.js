
export default (
    (array, i,l, accumulator, cb) => {
        for (; i < l; i++) {
            accumulator = cb(accumulator, array[i], i, array);
        };
        return accumulator;
    }
);
