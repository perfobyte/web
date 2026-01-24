

export default (
    function() {
        var t=this;
        return (
            (t.block.buffer.value)
            .substring(t.start, t.end)
        );
    }
);
