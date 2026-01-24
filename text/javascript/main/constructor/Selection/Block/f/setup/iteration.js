
export default (
    (block, i, array) => {
        block.setup(i, block.template.cloneNode(true));
    }
);
