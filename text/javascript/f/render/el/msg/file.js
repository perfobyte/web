
export default (
    (el,type,id) => {
        return (
            el.setAttribute("data-a", id.toString()),
            el.querySelector("use").setAttribute("href", `#i${type}`),
            el
        );
    }
);
