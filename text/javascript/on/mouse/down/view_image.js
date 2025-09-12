
export default (
    (view_1,view) => {
        var
            s = view_1.querySelector("img").style,
            window = globalThis.window,
            move = (e) => {
                return (
                    (s.left = `${view[0] = e.clientX - view[5]}px`),
                    (s.top  = `${view[1] = e.clientY - view[6]}px`)
                );
            },
            up = (
                function(e) {
                    return (
                        this.removeEventListener("mousemove", move),
                        this.removeEventListener("mouseup", up)
                    );
                }
            )
        ;
        return (
            view_1.onmousedown = (
                (e) => {
                    return (
                        e.preventDefault(),
                        (view[5] = e.clientX - view[0]),
                        (view[6] = e.clientY - view[1]),

                        window.addEventListener("mousemove", move),
                        window.addEventListener("mouseup", up)
                    )
                }
            )
        );
    }
);
