

export default (
    (low, high, predicate, fallback) => {
        var
            best = fallback,
            mid = 0
        ;

        while (low <= high) {
            predicate(
                mid = ((low + high) >> 1)
            )
            ? (high = (best = mid) - 1)
            : (low = (mid + 1));
        };
        
        return best;
    }
)