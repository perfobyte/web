import {scroll,O,} from '../../state/i.js';
import {scrolly} from '../../elems.js';


export default (
    () => {
        var
            enter = (e) => {
                return (
                    scroll.target = e.currentTarget
                );
            },
            leave = (e) => {
                return (
                    scroll.target = globalThis.document.documentElement
                )
            }
        ;
        return (
            (e) => {
                return (
                    e.addEventListener("mouseenter", enter),
                    e.addEventListener("mouseleave", leave)
                )
            }
        )
    }
)()