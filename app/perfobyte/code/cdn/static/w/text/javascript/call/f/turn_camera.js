import {cl_u,cl_i} from '../../elems.js'
import {MAX_PEER_WIDTH, MAX_PEER_HEIGHT} from '../i.js'

export default (
    (width,height,) => {
        var
            cf = (width / height),

            v_st = null,
            w = "",
            h = ""
        ;
        return (
            (width > MAX_PEER_WIDTH) && (height = (width = MAX_PEER_WIDTH) / cf),
            (height > MAX_PEER_HEIGHT) && (width = (height = MAX_PEER_HEIGHT) * cf),

            (v_st = cl_i.style).setProperty("--w", (w = width + "px")),
            v_st.setProperty("--h", (h = height + "px")),
            
            (v_st = cl_u.style).setProperty("--w", w),
            v_st.setProperty("--h", h)
        )
    }
)