
export default (
    (array, i, l, constructor, foreach) => {
        foreach(array,i,l,constructor.proto.setup_iteration)
    }
);
