import {MODULE_GAP_PX, MODULE_MARGIN} from "../../../conf/i.js";

export default (
    (e) => {
        var
            pe = e.currentTarget.parentElement
        ;
        return (
            pe.style.height = (
                pe.classList.toggle("a")
                ? (
                    `${
                        MODULE_MARGIN
                        + pe.querySelector(".c").clientHeight
                    }px`
                )
                : MODULE_GAP_PX
            )
        )
    }
);
