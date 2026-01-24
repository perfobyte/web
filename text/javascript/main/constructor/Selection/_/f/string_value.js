

export default (
    function(
        separator_mode,
        a,
        selection_empty_value,
        ss,
    ) {
        var
            s = this
        ;
        return(
            ( (s.string_value_template)[ separator_mode ] )(
                a,
                
                s.i,
                s.l,

                s.start,
                s.end,

                selection_empty_value,
                ss,
            )
        );
    }
)