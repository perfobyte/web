

export default (
    (window,sb,cb) => {
        var
            l = sb.querySelector('.l'),
            p = l.querySelector(".p").style,
            move = (
                (e) => {
                    var
                        r = l.getBoundingClientRect(),
                        percent = (
                            Math.max(
                                0,
                                Math.min(
                                    100,
                                    (
                                        (
                                            (
                                                e.clientX
                                                - r.left
                                            )
                                            / r.width
                                        )
                                        * 100
                                    )
                                )
                            )
                        )
                    ;
                    return (
                        cb(percent),
                        (p.transform = `scaleX(${percent})`)
                    )

                }
            ),
            up = (
                function() {
                    return (
                        this.removeEventListener("mousemove", move),
                        this.removeEventListener("mouseup", up)
                    );
                }
            )
        ;
        return (
            l.onmousedown = (
                (e) => {
                    return (
                        e.stopPropagation(),
                        e.preventDefault(),

                        window.addEventListener("mousemove",move),
                        window.addEventListener("mouseup",up),
                        
                        move(e)
                    );
                }
            )
        );
    }
);
