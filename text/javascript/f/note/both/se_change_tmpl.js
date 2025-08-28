import {note} from '../../../state/i.js';

export default (
    (a,b, C,d) => (e) => {
        var
            t = e.currentTarget
        ;
        return(
            localStorage.setItem(a, (note[C] = t.value)),
            localStorage.setItem(b, (note[d] = t[t.selectedIndex].textContent))
        )
    }
)