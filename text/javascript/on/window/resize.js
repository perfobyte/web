import {O} from '../../state/i.js';
import {html_st} from '../../elems/i.js';


export default (
    (e) => {
        var
            window = e.currentTarget
        ;
        return (
            html_st.setProperty("--w", (window.innerWidth + "px")),
            html_st.setProperty("--h", (window.innerHeight + "px"))
        );
    }
);
