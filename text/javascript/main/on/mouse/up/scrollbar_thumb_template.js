
export default (
    (move,scrollbar_thumb_cl) => {
        var
            up = (e) => {
                var t = e.currentTarget;
                return void (
                    t.removeEventListener("mousemove", move),
                    t.removeEventListener("mouseup", up),

                    scrollbar_thumb_cl.remove("active")
                );
            }
        ;
        return up;
    }
)