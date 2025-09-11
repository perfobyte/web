import {readVarint} from './i.js';


export default (
    (buf, pos, wire) => {
        return (
            (wire === 0) ? readVarint(buf, pos)[1] :
            (wire === 1) ? (pos + 8) :
            (wire === 2) ? readVarint(buf, pos).reduce(sm_rd,0) :
            (wire === 5) ? (pos + 4) :
            (
                console.error("unsupported wire type " + wire),
                -1
            )
        );
    }
);