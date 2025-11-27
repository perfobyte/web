
export default (
    (span,v) => {
        var
            s = "",
            n = 0,
            after = 0,
            amount = 1
        ;
        span.textContent = v;
        n = span.offsetWidth;

        s = n.toString();
        
        span.textContent = (
            v
            .repeat(
                amount = (
                    s.includes('.')
                    ? (s.split('.')[1].length)
                    : 1
                )
            )
        );
        return span.offsetWidth / amount;
    }
)