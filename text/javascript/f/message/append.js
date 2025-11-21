export default (
    (e,cl,src,top,list) => {
        e.classList.add(cl);
        e.firstElementChild.textContent = src;
        e.style.top = top;
        return list.appendChild(e);
    }
);
