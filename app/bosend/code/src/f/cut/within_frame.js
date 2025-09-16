

export default (
    (p,s) => (
        p.indexOf(
            s,
            p.indexOf(s) + 1
        )
    )
)