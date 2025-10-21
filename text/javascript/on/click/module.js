

// TODO: calculate height of content and open only content part;

export default (
    (e) => {
        var
            pe = e.currentTarget.parentElement
        ;
        return (
            pe.style.height = (
                pe.classList.toggle("a")
                ? (50 + pe.querySelector(".c").clientHeight + 40).toString() + "px"
                : "50px"
            )
        )
    }
);
