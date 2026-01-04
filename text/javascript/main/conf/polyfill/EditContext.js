

export default (
    EditContext
    ||
    (() => {
        console.log("hello")

        function EditContext() {

        };

        EditContext.prototype = {

        };

        return EditContext;
    })()
);
