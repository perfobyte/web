

export default (
    globalThis.EditContext
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
