
export default (
    (p,s,t) => ({
        m: (
            (t = (localStorage.getItem("3")))
            ? parseInt(t)
            : (
                localStorage.setItem("3","0"),
                0
            )
        ),
        vd: (
            localStorage.getItem("2")
            ||
            ""
        ),
        md: (
            localStorage.getItem("4")
            ||
            ""
        ),
        l: (
            localStorage.getItem("1")
            ||
            (
                localStorage.setItem("1", "0"),
                "0"
            )
        ),
        n: (
            localStorage.getItem("0")
            ||
            (
                localStorage.setItem("0", "username"),
                "username"
            )
        ),
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
)(window.location.search,0,"");