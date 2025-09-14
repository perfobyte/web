import {view} from '../../../../state/i.js';


export default (
    (e) => {
        var
            s = globalThis.document.querySelector("#view1 img").style
        ;
        return (
            (s.left = `${view[0] = (e.clientX - view[5])}px`),
            (s.top  = `${view[1] = (e.clientY - view[6])}px`),
            undefined
        );
    }
);
