
export default (
    (length, i, Default, constructor, Array) => {
        var
            a = Array(length),
            e = null
        ;
        while (i < length) {
            e = Default(constructor);
            e.setup_iteration(e,i,a);
            a[i++] = e;
        };
        return(a);
    }
);
