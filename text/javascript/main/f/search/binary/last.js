
export default (
    (low, high, predicate, fallback) => {
        var
            best = fallback,
            mid = 0
        ;
    
        while (low <= high) {
            predicate(
                mid = (low + high) >> 1
            )
            ? (low = (best = mid) + 1)
            : (high = (mid - 1))
        };
        
        return best;
    }
);
