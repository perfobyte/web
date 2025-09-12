import {view} from '../../state/i.js';


export default (
    function(e) {
        var
            w = this.naturalWidth,
            h = this.naturalHeight,
            s = this.style,
            W = globalThis.window
        ;
        
        s.left = `${view[0]=((W.innerWidth-(view[2]=w))/2)}px`;
        s.top = `${view[1]=((W.innerHeight-(view[3]=h))/2)}px`;

        return (
            undefined
        );
    }
);
