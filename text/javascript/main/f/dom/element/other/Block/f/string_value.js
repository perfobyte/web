
export default (
    function() {
        var t = this;
        return(
            (t.buffer.value).substring(t.start, t.end)
        );
    }
)