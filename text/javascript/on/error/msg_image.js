

export default (
    function(e) {
        return (
            URL.revokeObjectURL(this.src),
            console.error(e)
        );
    }
);
