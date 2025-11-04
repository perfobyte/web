

export default (
    (r,v,i) => {
        return (
            (
                r[0][i] =
                    Number(
                        r[1].canPlayType(v) === "probably"
                    )
            ),
            r
        );
    }
);
