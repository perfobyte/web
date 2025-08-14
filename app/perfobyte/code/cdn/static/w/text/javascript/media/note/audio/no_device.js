
import C from '../c.js';


export default (
    (e) => {
        return(
            console.dir(e),
            (C.SE.innerHTML="<option>No devices found</option>")
        )
    }
)