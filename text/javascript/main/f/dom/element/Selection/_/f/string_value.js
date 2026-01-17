

export default (
    function(
        separator_mode,
        a,
        selection_empty_value,
        ss,
    ) {
        var
            s = this,
            value = s.string_value_template[separator_mode],
            v = (
                value(
                    a,
                    
                    s.i,
                    s.l,
    
                    s.start,
                    s.end,
    
                    selection_empty_value,
                    ss,
                )
            )
        ;
        return(v);
    }
)