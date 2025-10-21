
export default (
    (
        scroll,
        html,
        html_st,

        starget, // scrolly[_]
        height, // scrollo_height[_]
        stop, // scroll_value[_]
    ) => {
        return (
            (html_st.height = `${height}px`),
            (html.scrollTop = stop),
            (scroll.starget = starget)
        )
    }
);
