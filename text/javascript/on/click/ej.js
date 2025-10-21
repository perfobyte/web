import {ej_p} from '../../elems/i.js';

export default (() => {
    var
        hook = (
            (e) => {
                return (
                    (e.target.closest("#ej_p"))
                    ||
                    (
                        e.currentTarget.removeEventListener("click", hook),
                        ej_p.remove("a")
                    )
                );
            }
        )
    ;
    return (e) => {
        return (
            e.preventDefault(),
            e.stopPropagation(),

            ej_p.contains("a")
            ? (
                window.removeEventListener("click", hook),
                ej_p.remove("a")
            )
            : (
                window.addEventListener("click", hook),
                ej_p.add("a")
            )
        );
    };
})();
