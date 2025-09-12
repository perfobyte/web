export default (
    (el,img,id,w,h) => {
        var
            b = el.querySelector("button"),
            b_st = b.style,
            ar = w/h
        ;
        (w>360)&&(h=((w=360)/ar));
        b_st.width = `${img.width = w}px`;
        b_st.height = `${img.height = h}px`;
        return (
            el.setAttribute("data-a", id),
            b.appendChild(img),
            el
        );
    }
);
