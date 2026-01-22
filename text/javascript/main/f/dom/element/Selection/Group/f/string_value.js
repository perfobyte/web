

export default (
    function(sblocks, tokens) {
        var t = this;
        return (
            t.block.buffer.value.substring(
                tokens[sblocks[t.i].i].start,
                tokens[(sblocks[t.l-1].l)-1].end
            )
        );
    }
);
