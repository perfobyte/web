
export default (
    (r,template,i,a) => {
        return (
            (a[i] = template.cloneNode(r)),
            r
        );
    }
);
