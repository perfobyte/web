

export default (
    (a,d,i,) => {
        var
            bt = a.querySelector("button"),
            general = a.querySelector("div"),

            b = general.querySelector(":nth-child(2)")
        ;
        return(
            bt.setAttribute("data-a", i.toString()),

            (
                general
                .querySelector(":nth-child(1)")
                .style
                .background = `rgb(${d.r.join(",")})`
            ),

            (b.querySelector("p:nth-child(1)").textContent = d.c),
            (b.querySelector("p:nth-child(2) > :nth-child(1)").textContent = d.a),
            (b.querySelector("p:nth-child(2) > :nth-child(2)").textContent = d.b),

            a
        );
    }
)