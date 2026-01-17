

export default (
    function() {
        var
            t = this,
            v = (t.block.buffer.value)
        ;
        return (
            v.substring(t.start, t.end)
        );
    }
);
