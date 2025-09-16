import {readLen} from './i.js';

export default (
    (buf, pos) => {
        var
            _ = readLen(buf, pos),
            p3 = _[2]
        ;
        return [
            buf.subarray(_[1], p3).toString("utf8"),
            p3
        ];
    }
)