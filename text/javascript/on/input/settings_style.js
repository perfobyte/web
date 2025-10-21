import {html_st} from '../../elems/i.js';

export default (
    (e) => {
        var
            input = e.currentTarget,
            v = 0
        ;
        return (
            html_st.setProperty(
                input.getAttribute('data-k'),
                `${
                    isNaN(
                        v = Number(input.value)
                    )
                    ? 0
                    :
                    (v < 0)
                    ? 0
                    :
                    (v > 255)
                    ? 255
                    : v
                }px`
            )
        )
    }
);
