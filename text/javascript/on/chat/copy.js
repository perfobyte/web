
export default (
    (e) => {
        var
            clipboardData = e.clipboardData
        ;
        return (
            e.preventDefault(),

            clipboardData.setData(
                'text/plain',
                (
                    window
                    .getSelection()
                    .toString()
                )
            )
        );
    }
);
