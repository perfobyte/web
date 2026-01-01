

export default (
    (template) => {
        var
            element = template.cloneNode(true)
        ;
        return {
            message: null,
            block: null,

            start: 0,
            end: 0,
            length: 0,
            
            top:0,
            left:0,
            width:0,

            element,
        }
    }
);
