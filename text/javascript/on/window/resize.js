
export default (
    (e) => {
        var
            window = e.currentTarget,
            html_st = window.document.documentElement.style
        ;
        return (
            html_st.setProperty(
                "--w",
                (window.innerWidth + "px")
            ),
            html_st.setProperty(
                "--h",
                (window.innerHeight + "px")
            )
        );
    }
);
