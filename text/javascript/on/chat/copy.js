
export default (
    (e) => {
        return (
            e.preventDefault(),
            e.clipboardData.setData('text/plain', window.getSelection().toString())
        );
    }
);
