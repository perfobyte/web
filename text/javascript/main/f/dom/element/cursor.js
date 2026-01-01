

export default (
    (template) => {
        var
            element = template.cloneNode(true)
        ;
        return {
            x:0,
            y:0,

            sx:0,
            sy:0,
            s_direction:0,
            s_type:0,
            
            element,
        };
    }
);
