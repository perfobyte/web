import {size_stream, gain_stream} from './i.js';

export default (
    (s,t) => {
        return(
            (t===0)
            ? gain_stream(s)
            :
            (t===1)
            ? size_stream(s)
            : size_stream(gain_stream(s))
        )
    }
);
