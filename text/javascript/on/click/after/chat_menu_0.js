

export default (
    () => {
        var
            a = (
                (e) => {
                    var
                        t = e.currentTarget,
                        cl = chat_menu.classList
                    ;
                    return (
                        e.target.closest("#chat_menu_0")
                        ||
                        (
                            t.removeEventListener("click",a),
                            t.removeEventListener("contextmenu",a),

                            cha.querySelector('.chbr > button.ctx').classList.remove("ctx"),
                            document.getElementById("chat_menu_0").classList.remove('a')
                        )
                    );
                }
            )
        ;
        return a;
    }
)();
