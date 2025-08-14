import O from '../state/O.js';

export default (
    (e) => {
        var
            window = e.currentTarget,

            html = document.documentElement,
            html_st = html.style,
            w = 0
        ;
        return (
            (html.scrollLeft = ((w=window.innerWidth) * O.I)),
            html_st.setProperty("--w", w + "px"),
            html_st.setProperty("--h", window.innerHeight + "px")

            
        );
    }
);
