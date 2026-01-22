
export default (
    (array, i,l, cb) => {
        for (; i < l; i++) {
            cb(array[i], i, array);
        };
    }
);
