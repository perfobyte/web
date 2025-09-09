

export default (
    (from, to, emoji, EJ_EL, ej_p_list) => {
        var
            b = null
        ;
        for(;from<to;from++) {

            (b = EJ_EL.cloneNode(true))
            .textContent = emoji[from];

            ej_p_list.appendChild(b);
        };
        return to;
    }
);
