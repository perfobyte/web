
export default (
    function(tokens, sblocks) {
        return tokens[sblocks[this.l-1].l-1];
    }
);
