
export default (
    (array, i,l, accumulator, cb) => {
        for (; i < l; i++) {
            cb(accumulator, array[i], i, array);
        };
    }
);
