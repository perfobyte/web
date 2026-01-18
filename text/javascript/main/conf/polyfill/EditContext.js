

export default (
    EditContext
    ||
    (
        (
            () => {
                function a(){};
                a.prototype=null;
                return a;
            }
        )()
    )
);
