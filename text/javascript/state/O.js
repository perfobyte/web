

// free = 0,2,3,4,

export default (
    (p,s) => ({
        I: (
            (p.length > 1)
            ? (
                (((s = parseInt(p[1])) >= 0) || (s < 4))
                ? s
                : 0
            )
            : 0
        )
    })
)(window.location.search,0);