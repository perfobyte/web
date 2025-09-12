import {view} from '../../state/i.js';
import {view1_zoom_p_st, VIEW_1_IMG as t} from '../../elems.js';


export default (
    (e) => {
        var
            delta = ((e.deltaY > 0) ? 0.9 : 1.1),
            
            r = t.getBoundingClientRect(),
            
            s = t.style,
            
            delta1 = 0,

            desired = (view[4] * delta),
            clamped = 0
        ;
        return (
            e.preventDefault(),
            e.stopPropagation(),

            (
                view1_zoom_p_st
                .transform = (
                    `scaleX(${
                        (
                            (clamped = Math.max(1,Math.min(2,desired)))
                            - 1
                        )
                        * 100
                    })`
                )
            ),

            

            (s.left = `${
                view[0] += (
                    (e.clientX - r.left)
                    * (
                        delta1 = (
                            1 - (
                                delta = (
                                    clamped / view[4]
                                )
                            )
                        )
                    )
                )
            }px`),
            (view[4] = clamped),

            (s.top = `${view[1] += ((e.clientY - r.top) * delta1)}px`),

            (s.width = `${view[2] *= delta}px`),
            (s.height = `${view[3] *= delta}px`),
            
            undefined
        );
    }
);
