import c from '../../c.js';

export default (
    (a,b, C,d) => (e) => {
        var
            t = e.currentTarget
        ;
        
        return(
            localStorage.setItem(a, (c[C] = t.value)),
            localStorage.setItem(b, (c[d] = t[t.selectedIndex].textContent))
        )
    }
)