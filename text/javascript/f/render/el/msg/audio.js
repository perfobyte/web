import {lang} from "../../../../state/i.js";

export default (
    (el,id,on_play,on_download,) => {
        return (
            el.setAttribute("data-a", id.toString()),
            (el.querySelector(".dl").onclick = on_download),
            (el.querySelector(".pl").onclick = on_play),
            (el.onclick = click),
            el
        );
    }
);
