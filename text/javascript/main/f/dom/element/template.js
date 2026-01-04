

export default (
    (template) => {
        var
            element = template.cloneNode(true)
        ;
        return {
            i:0,
            
            message: null,
            block: null,

            position:2,
            x:0,
            y:0,

            start: 0,
            end: 0,
            length: 0,
            
            top:0,
            left:0,

            width:0,
            height:0,

            element,
        }
    }
);
