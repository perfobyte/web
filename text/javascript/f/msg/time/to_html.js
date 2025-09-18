
export default (
    (c, h, rows, datetime, el, mt_v_el) => {
        return (
            (el.style.height = `${h}px`),
            el.setAttribute("title", datetime),

            (c === "")
            ||
            (
                (rows > 1) && el.classList.add("m"),
                (mt_v_el(el).textContent = c)
            ),
            el
        );
    }
)