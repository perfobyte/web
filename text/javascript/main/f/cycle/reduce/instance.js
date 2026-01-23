
export default (
    (r,_,i,a) => {
        a[i] = new r();
        return r;
    }
);
