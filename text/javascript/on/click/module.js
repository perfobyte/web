

// TODO: calculate height of content and open only content part;

export default (
    (e) => {
        var
            pe = e.currentTarget.parentElement
        ;
        return (
            pe.style.height = (
                pe.classList.toggle("a")
                ? (50+pe.querySelector(".c").clientHeight).toString() + "px"
                : "50px"
            )
        )
    }
);
